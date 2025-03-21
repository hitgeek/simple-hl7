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
      fs.writeFileSync('test/import/adt.hl7', hl7TestMessage);
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

        assert.equal(fs.statSync(path.join('./test/export', newMessageName)).isFile(), true);
        fs.unlinkSync(path.join('./test/export', newMessageName));
        fs.rmdirSync('./test/export');
        done();
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

      var tcpClient = server.createTcpClient({ host: '127.0.0.1', port: 8686 });

      tcpClient.send(adt, function(err, ack) {
        console.log(ack.log());
        assert.equal(ack.header.getHeaderField(11), adt.header.getHeaderField(11))
        assert.equal(ack.header.getHeaderField(12), adt.header.getHeaderField(12))
        done();
      });

    });
    it('should work if 2 messages sent in a row, first message successfully sent, second message blocked', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());

      var tcpClient = server.createTcpClient({ host: '127.0.0.1', port: 8686 });
      var promise = new Promise(function(resolve) {
        tcpClient.send(adt, function(err, ack) {
          resolve({err, ack});
        });
      });
      var promise2 = new Promise(function(resolve) {
        tcpClient.send(adt, function(err, ack) {
          resolve({err, ack});
        });
      });
      Promise.all([promise, promise2])
      .then(function(results) {
        assert(results[0].ack);
        assert(results[1].err);
        done();
      });
    })
    it('should work correctly if message sent as 2 parts', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());
      var rawTcpClient = net.connect({host: '127.0.0.1', port: 8686});

      rawTcpClient.on('data', function(data) {
        rawTcpClient.end();
        done();
      });

      var part1 = adt.toString().substring(0, 10);
      var part2 = adt.toString().substring(10, adt.toString().length);

      rawTcpClient.write(VT + part1);
      rawTcpClient.write(part2 + FS + CR);
    });
    it('should keep connection open and still work', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());

      var tcpClient = server.createTcpClient({ host: '127.0.0.1', port: 8686, keepalive: true });

      tcpClient.send(adt, function(err) {
        if (err) {
          tcpClient.close();
          return done(err);
        }
        setTimeout(function() {
          tcpClient.send(adt, function(err) {
            tcpClient.close();
            done(err);
          });
        }, 1000);
      });
    });
    it('should handle no server', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());
      var tcpClient = server.createTcpClient({ host: '127.0.0.1', port: 9999, keepalive: true });
      tcpClient.send(adt, function(err) {
        console.log('here is the error ' + err.message);
        done();
      });
    });
  });

  describe('.stop()', function() {
    it('should stop the tcp server', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());
      var tcpClient1 = server.createTcpClient({ host: '127.0.0.1', port: 8686, keepalive: true });
      tcpClient1.send(adt, function(err) {
        if (err)
          return done(err);

        tcpServer.stop();
        setTimeout(function() {
          var tcpClient2 = server.createTcpClient({ host: '127.0.0.1', port: 8686, keepalive: true });
          tcpClient1.send(adt, function(err) { // shows that open connections are still open
            if (err)
              return done(err);
            tcpClient2.send(adt, function(err, ack) { // shows that new connections cannot open
              assert.equal(err.code, 'ECONNREFUSED');
              done();
            });
          });
        });
      });
    });
    it('should stop the tcp server and close all connections', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());
      var tcpClient1 = server.createTcpClient({ host: '127.0.0.1', port: 8686, keepalive: true });
      tcpServer.start(8686);
      tcpClient1.send(adt, function(err) {
        if (err)
          return done(err);

        tcpServer.stop(function () {
          setTimeout(function() { // wait for close to finish on the client side
            assert(!tcpClient1.client); // on close TcpClient.client is deleted
            var tcpClient2 = server.createTcpClient({ host: '127.0.0.1', port: 8686, keepalive: true });
            tcpClient2.send(adt, function(err, ack) { // shows that new connections cannot open
              assert.equal(err.code, 'ECONNREFUSED');
              done();
            });
          }, 100);
        });
      });
    });
  });
});

