var Parser = require('../hl7/parser.js');
var net = require('net')

var VT = String.fromCharCode(0x0b);
var FS = String.fromCharCode(0x1c);
var CR = String.fromCharCode(0x0d);

function TcpClient() {
  this.options = {}
  if (arguments.length == 2) {
    this.options.host = arguments[0];
    this.options.port = arguments[1];
  }
  if (arguments.length == 1) {
    this.options = arguments[0];
  }
  this.host = this.options.host;
  this.port = this.options.port;
  this.callback = this.options.callback;
  this.keepalive = this.options.keepalive;
  this.responseBuffer = "";
  this.awaitingResponse = false;
  this.parser = new Parser({ segmentSeperator: '\r' });
}

TcpClient.prototype.connect = function(callback) {
  var self = this;
  self.client = net.connect({host: self.host, port: self.port}, function() {
    self.client.on('data', function(data) {
      self.responseBuffer += data.toString();

      /*
      'Sometimes' the responseBuffer contains things like FS or CR, and so 
      self.responseBuffer.substring() stops copying early, and the compare to FS+CR fails
      So try a real parse, see if it's a response.
      */
      var _parsed = false;
      var _ackish = false;
      try{
        const ackish = self.parser.parse(self.responseBuffer.substring(1, self.responseBuffer.length - 1));
        _parsed = true;
      }catch(e){
        console.log('ackish',e)
      }

      if (self.responseBuffer.substring(self.responseBuffer.length - 2, self.responseBuffer.length) == FS + CR) {
        var ack = self.parser.parse(self.responseBuffer.substring(1, self.responseBuffer.length - 2));
        self.callback(null, ack);
        self.responseBuffer = "";
        self.awaitingResponse = false;
        if (!self.keepalive) {
          self.close();
        }
      }
    });
    callback();
  });
  self.client.on('error', function(err) {
    callback(err);
  })
}

TcpClient.prototype.send = function(msg, callback) {
  var self = this;
  self.callback = callback || self.callback;
  if (self.awaitingResponse) {
    self.callback(new Error("Can't send while awaiting response"));
  }
  self.awaitingResponse = true;
  try {
    if (self.client) {
      self.client.write(VT + msg.toString() + FS + CR);
    } else {
      self.connect(function(err) {
        if (err) return self.callback(err);
        self.awaitingResponse = true;
        self.client.write(VT + msg.toString() + FS + CR);
      });
    }
  } catch (e) {
    self.callback(e);
  }
}

TcpClient.prototype.close = function() {
  var self = this;
  if (self.client) {
    self.responseBuffer = "";
    self.awaitingResponse = false;
    self.client.end();
    self.client.destroy();
    delete self.client;
  }
}

module.exports = TcpClient
