var Parser = require('../../hl7/parser.js');
var net = require('net')

var parser = new Parser({ segmentSeperator: '\r' });
var VT = String.fromCharCode(0x0b);
var FS = String.fromCharCode(0x1c);
var CR = String.fromCharCode(0x0d);

function TcpClient() {

  this.client = null;
  this.ackCallback = null;
}

TcpClient.prototype.connect = function(host, port) {

  var tcpClient = this;
  this.client = net.connect({host: host, port: port});

  this.client.on('data', function(data) {
    var ack = parser.parse(data.toString().substring(1, data.toString().length - 2));
    tcpClient.ackCallback(ack);
  });

}

TcpClient.prototype.send = function(msg, callback) {
  this.ackCallback = callback
  this.client.write(VT + msg.toString() + FS + CR);
}

TcpClient.prototype.close = function() {
  this.client.end();
}

module.exports = TcpClient
