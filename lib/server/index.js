var FileClient = require('./client/file-client.js');
var FileServer = require('./server/file-server.js');
var TcpServer  = require('./server/tcp-server.js');
var TcpClient  = require('./client/tcp-client.js');

module.exports.createFileServer = function() { return new FileServer(); }
module.exports.createFileClient = function(dest) { return new FileClient(dest); }
module.exports.createTcpServer  = function() { return new TcpServer(); }
module.exports.createTcpClient  = function() { return new TcpClient(); }
module.exports.test = "Test"
