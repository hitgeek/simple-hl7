var assert = require('assert');
var fs     = require('fs');
var hl7    = require('../lib/index.js');
var net    = require('net');
var path   = require('path');
var server = hl7.Server;


var VT = String.fromCharCode(0x0b);
var FS = String.fromCharCode(0x1c);
var CR = String.fromCharCode(0x0d);

describe('tcp', function() {
  var tcpServer
  describe('.start()', function() {
    this.timeout(10000);
    it('should start a tcp server listenting on specified port, and respond to messages', function(done) {
      var parser = new hl7.Parser();
      var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());

      var app = hl7.tcp();

      app.use(function(req, res, next) {
        assert(req.msg);
        assert(res.ack);
        assert(res.end);
        next();
      });

      app.use(() => false, function(req, res, next) {
        req.shouldNotBeHere = true;
        next();
      });

      app.use(function(req, res, next) {
        req.shouldBeHere = true;
        res.shouldBeHere = true;
        next()
      });

      app.use(function(req, res) {
        assert(req.shouldBeHere);
        assert(res.shouldBeHere);
        assert(!req.shouldNotBeHere);
        res.end();
      });

      var __server = app.start(8787);

      setTimeout(function() {
        var tcpClient = server.createTcpClient();

        tcpClient.connect('127.0.0.1', 8787);

        tcpClient.send(adt, function(ack) {
          tcpClient.close();
          __server.stop();
          done();
        });
      }, 1000);

    });
  });
});
