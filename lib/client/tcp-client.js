var Parser = require('../hl7/parser.js');
var net = require('net')

var VT = String.fromCharCode(0x0b);
var FS = String.fromCharCode(0x1c);
var CR = String.fromCharCode(0x0d);

function TcpClient(host, port) {
  this.host = host;
  this.port = port;
  this.parser = new Parser({ segmentSeperator: '\r' });
}

function sendMessage(msg, callback) {
  var self = this;
  var response = "";
  self.client.on('data', function(data) {
    response += data.toString();
    if (response.substring(response.length - 2, response.length) == FS + CR) {
      var ack = self.parser.parse(response.substring(1, response.length - 2));
      callback(null, ack);
      response = "";
    }
  });
  self.client.write(VT + msg.toString() + FS + CR);
}

TcpClient.prototype.send = function(msg, callback) {
  var self = this;
  try {
    if (self.client) {
      sendMessage.call(self, msg, callback);
    } else {
      self.client = net.connect({host: this.host, port: this.port}, function() {
        sendMessage.call(self, msg, callback);
      });
    }
  } catch (e) {
    callback(e);
  }
}

TcpClient.prototype.close = function() {
  if (self.client) {
    self.client.end();
    delete self.client;
  }
}

module.exports = TcpClient
