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

TcpClient.prototype.send = function(msg, callback) {
  var self = this;
  try {
    var client = net.connect({host: this.host, port: this.port}, function() {
      var response = "";
      client.on('data', function(data) {
        response += data.toString();
        if (response.substring(response.length - 2, response.length) == FS + CR) {
          var ack = self.parser.parse(response.substring(1, response.length - 2));
          callback(null, ack);
          response = "";
        }
      });
      client.write(VT + msg.toString() + FS + CR);
    });
  } catch (e) {
    callback(e);
  }
}

module.exports = TcpClient
