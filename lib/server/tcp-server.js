var EventEmitter = require('events').EventEmitter;
var Message      = require('../hl7/message');
var moment       = require('moment');
var net          = require('net');
var Parser       = require('../hl7/parser');
var util         = require('util');

var VT = String.fromCharCode(0x0b);
var FS = String.fromCharCode(0x1c);
var CR = String.fromCharCode(0x0d);

function TcpServer(options, handler) {
  EventEmitter.call(this);

  if (!handler) {
    handler = options;
    options = {};
  }

  this.handler = handler;
  this.server = null;
  this.socket = null;
  this.parser = options.parser || new Parser();
}

util.inherits(TcpServer, EventEmitter);

function Req(msg, raw) {
  this.msg = msg;
  this.raw = raw; 
  this.sender = msg.header.getField(1).length == 1 ?
    msg.header.getField(1).toString() :
    msg.header.getField(1);

  this.facility = msg.header.getField(2).length == 1 ?
    msg.header.getField(2).toString() :
    msg.header.getField(2);

  this.type = msg.header.getComponent(7, 1).toString();
  this.event = msg.header.getComponent(7, 2).toString();
}

function Res(socket, ack) {
  this.ack = ack;

  this.end = function() {
    socket.write(VT + (this.ack).toString() + FS + CR);
  }
}

TcpServer.prototype.start = function(port, encoding, options) {
  var self = this;
  options = options || {}
  this.server = net.createServer(function(socket) {
    var message = "";
    socket.on('data', function(data) {
      try {
        message += data.toString();
        if (message.substring(message.length - 2, message.length) == FS + CR) {
          var hl7 = self.parser.parse(message.substring(1, message.length - 2));
          var ack = self.createAckMessage(hl7);

          var req = new Req(hl7, message);
          var res = new Res(socket, ack);
          self.handler(null, req, res);
          message = "";
        }
      } catch (err) {
        self.handler(err)
      }
    }).setEncoding(encoding ? encoding : "utf-8");;
  });
  this.server.listen(port);
}

TcpServer.prototype.stop = function() {
  this.server.close();
}

TcpServer.prototype.createAckMessage = function(msg) {
  var ack = new Message(
                        msg.header.getField(3),
                        msg.header.getField(4),
                        msg.header.getField(1),
                        msg.header.getField(2),
                        moment().format('YYYYMMDDHHmmss'),
                        '',
                        ["ACK"],
                        'ACK' + moment().format('YYYYMMDDHHmmss'),
                        'P',
                        '2.3')

  ack.addSegment("MSA", "AA", msg.header.getField(8))
  return ack;
}


module.exports = TcpServer;
