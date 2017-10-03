var assert = require('assert');
var fs     = require('fs');
var hl7    = require('../lib/index.js');
var net    = require('net');
var path   = require('path');
var server = hl7.Server;


var VT = String.fromCharCode(0x0b);
var FS = String.fromCharCode(0x1c);
var CR = String.fromCharCode(0x0d);

describe('FileServer', function() {
  var fileServer;
  describe('.start()', function() {
    this.timeout(10000);
    it('should start the file server listening on a folder, and emit event on new file', function(done) {

      var hl7TestMessage = fs.readFileSync('test/samples/adt.hl7').toString().replace(/\r?\n/g, "\r");

      fileServer = server.createFileServer(function(err, req, res) {

        assert.equal(req.msg.toString(), hl7TestMessage);

        fs.unlinkSync(req.file);
        fs.rmdirSync('test/import');
        done();
      });

      fileServer.start('test/import');

      setTimeout(function() {
        fs.writeFileSync('test/import/adt.hl7', hl7TestMessage);
      }, 1000);

    });
  });

  describe('.stop()', function() {
    it('should  stop the server listening', function() {
      fileServer.stop();
      //if no errors assume it works?
    });
  });

});

describe('FileClient', function() {
  describe('.send()', function() {
    this.timeout(10000);
    it('should take an hl7 message and write it to the destination folder', function(done) {
      var parser = new hl7.Parser();
      var hl7MessageString = fs.readFileSync('./test/samples/oru-imm.hl7').toString();
      var msg = parser.parse(hl7MessageString)
      var newMessageName = msg.header.getField(8) + '.hl7'
      var msg = parser.parse(hl7MessageString);

      fs.mkdirSync('./test/export/')
      var fileClient = server.createFileClient('./test/export/');

      fileClient.send(msg, function(err) {
        assert(!err);

        setTimeout(function() {
          assert.equal(fs.statSync(path.join('./test/export', newMessageName)).isFile(), true);
          fs.unlinkSync(path.join('./test/export', newMessageName));
          fs.rmdirSync('./test/export');
          done();
        }, 5000)
      });
    });
  });
});

describe('TcpServer', function() {
  var tcpServer
  describe('.start()', function() {
    this.timeout(10000);
    it('should start a tcp server listenting on specified port, and respond to messages', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());

      tcpServer = server.createTcpServer(function(err, req, res) {
        res.end();
      });

      tcpServer.start(8686);

      setTimeout(function() {
        var tcpClient = server.createTcpClient({ host: '127.0.0.1', port:  8686 });

        tcpClient.send(adt, function(ack) {
          done();
        });
      }, 1000);

    });
    it('should work correctly if message sent as 2 parts', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());

      setTimeout(function() {
        var rawTcpClient = net.connect({host: '127.0.0.1', port: 8686});

        rawTcpClient.on('data', function(data) {
          rawTcpClient.end();
          done();
        });

        var part1 = adt.toString().substring(0, 10);
        var part2 = adt.toString().substring(10, adt.toString().length);

        rawTcpClient.write(VT + part1);
        setTimeout(function() {
          rawTcpClient.write(part2 + FS + CR);
        }, 2000)
      }, 1000);
    });
    it('should keep connection open and still work', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());

      setTimeout(function() {
        var tcpClient = server.createTcpClient({ host: '127.0.0.1', port:  8686, keepalive: true });

        tcpClient.send(adt, function(ack) {
          setTimeout(function() {
            setTimeout(function() {
              tcpClient.send(adt, function(ack) {
                tcpClient.close();
                done();
              });
            }, 1000);
          });
        });
      }, 1000);
    });
    it('should handle no server', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());
      var tcpClient = server.createTcpClient({ host: '127.0.0.1', port:  9999, keepalive: true });
      tcpClient.send(adt, function(err) {
        console.log('here is the error ' + err.message);
        done();
      });
    });
  });

  describe('.stop()', function() {
    it('should stop the tcp server', function() {
      tcpServer.stop()
    });
  });
});

