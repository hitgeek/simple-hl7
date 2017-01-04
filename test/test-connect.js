var assert = require('assert');
var fs     = require('fs');
var hl7    = require('../lib/index.js');
var net    = require('net');
var path   = require('path');
var server = hl7.Server;


var VT = String.fromCharCode(0x0b);
var FS = String.fromCharCode(0x1c);
var CR = String.fromCharCode(0x0d);

describe('file', function() {

  describe('.start()', function() {
    this.timeout(10000);
    it('should start the file server listening on a folder, and emit event on new file', function(done) {
      fs.mkdirSync('test/import');
      var hl7TestMessage = fs.readFileSync('test/samples/adt.hl7').toString().replace(/\r?\n/g, "\r");

      var app = hl7.file();

      app.use(function(req, res, next) {
        assert.equal(req.msg.toString(), hl7TestMessage);
        assert.equal(req.sender, 'EPIC');
        assert.equal(req.facility, 'EPICADT');
        assert.equal(req.type, 'ADT');
        assert.equal(req.event, 'A04');
        next();
      });

      app.use(function(req, res, next) {
        return next();
        req.shouldNotBeHere = true;
        next();
      });

      app.use(function(req, res, next) {
        req.shouldBeHere = true;
        next()
      });

      app.use(function(req, res, next) {
        assert(req.shouldBeHere);
        assert(!req.shouldNotBeHere);
        next();
      });

      app.use(function(req, res) {
        fs.unlinkSync(req.file);
        done();
      });

      app.use(function(err, req, res) {
        assert(!err);
        console.log(err);
      });

      var __server = app.start('test/import')

      setTimeout(function() {
        fs.writeFileSync('test/import/adt.hl7', hl7TestMessage);
      }, 1000);

    });
    describe('.stop()', function() {
      it('should stop server', function(done) {
        var app = hl7.file();
        app.start('test');
        setTimeout(function() {
            app.stop();
            done();
        }, 1000)
      });
    });
  });
});


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


        assert.equal(req.sender, 'EPIC');
        assert.equal(req.facility, 'EPICADT');
        assert.equal(req.type, 'ADT');
        assert.equal(req.event, 'A04');

        next();
      });

      app.use(function(req, res, next) {
        return next();
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
        var tcpClient = server.createTcpClient('127.0.0.1', 8787);

        tcpClient.send(adt, function(ack) {
          __server.stop();
          done();
        });
      }, 1000);

    });
    describe('.stop()', function() {
      it('should stop server', function(done) {
        var app = hl7.tcp();
        app.start(9999);
        setTimeout(function() {
            app.stop();
            done();
        }, 1000)
      });
    });
  });
});
