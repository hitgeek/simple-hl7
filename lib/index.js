module.exports.Component = require('./hl7/component')
module.exports.Field     = require('./hl7/field');
module.exports.Header    = require('./hl7/header');
module.exports.Message   = require('./hl7/message');
module.exports.Parser    = require('./hl7/parser.js');
module.exports.Segment   = require('./hl7/segment');

var FileClient = require('./client/file-client.js');
var FileServer = require('./server/file-server.js');
var TcpServer  = require('./server/tcp-server.js');
var TcpClient  = require('./client/tcp-client.js');


module.exports.Server = {
  createTcpServer: function(options, handler) { return new TcpServer(options, handler); },
  createTcpClient: function() {
    if (arguments.length == 2) {
      return new TcpClient(arguments[0], arguments[1]);
    } else {
      return new TcpClient(arguments[0]); 
    }
  },
  createFileServer: function(options, handler) { return new FileServer(options, handler); },
  createFileClient: function(dest) { return new FileClient(dest); },
}

module.exports.tcp = require('./connect/tcp');
module.exports.file = require('./connect/file');