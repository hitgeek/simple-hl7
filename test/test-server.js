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
      fs.mkdirSync('test/import');
      var hl7TestMessage = fs.readFileSync('test/samples/adt.hl7').toString().replace(/\r?\n/g, "\r");
      fileServer = server.createFileServer();

      fileServer.on('msg', function(newFile) {
        console.log('new message');

        assert.equal(newFile.hl7.toString(), hl7TestMessage);

        fs.unlinkSync(newFile.path);
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
      var newMessageName = msg.header.fields[7].value[0][0].value[0][0] + '.hl7'
      var msg = parser.parse(hl7MessageString);

      fs.mkdirSync('./test/export/')
      var fileClient = server.createFileClient('./test/export/');

      fileClient.send(msg, function() {


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

      tcpServer = server.createTcpServer();

      tcpServer.on('msg', function(data) {
        var msg = parser.parse(data.toString());
        assert.equal(msg.toString(), adt.toString())
      });

      tcpServer.start(8686);

      setTimeout(function() {
        var tcpClient = server.createTcpClient();

        tcpClient.connect('127.0.0.1', 8686);

        tcpClient.send(adt, function(ack) {
          tcpClient.close();
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

    it('should override createAckMessage function', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());
      tcpServer.createAckMessage = function(msg) {
        var ack = new hl7.Message(
                              msg.header.getField(3),
                              msg.header.getField(4),
                              msg.header.getField(1),
                              msg.header.getField(2),
                              "DATEGOESHEREDONTNEEDIT",
                              '',
                              ["ACK"],
                              'ACK' + "ANOTHERDATEDONTNEEDIT",
                              'T',
                              '2.5')

        ack.addSegment("MSA", "AA", msg.header.getField(8))
        return ack.toString();
      };

      var tcpClient = server.createTcpClient();

      tcpClient.connect('127.0.0.1', 8686);

      tcpClient.send(adt, function(ack) {
        tcpClient.close();
        assert.equal('MSH|^~\\&|SMS|SMSADT|EPIC|EPICADT|DATEGOESHEREDONTNEEDIT||ACK|ACKANOTHERDATEDONTNEEDIT|T|2.5\rMSA|AA|1817457', ack.toString())
        done()
      })
    });

  });

  describe('.stop()', function() {
    it('should stop the tcp server', function() {
      tcpServer.stop()
      //assume it worked if no exception???
    });
  });



});

describe('TcpClient', function() {
  describe('.connect()', function() {
    this.timeout(10000);
    it('should throw exception if it cant connect', function(done) {
      var client = server.createTcpClient();



      client.connect('127.0.0.1', 8888);

      client.client.on('error', function(err) {
        assert.equal(err.code, "ECONNREFUSED");
      });

      setTimeout(function() {
        done()
      }, 5000);

    });
  })
});
