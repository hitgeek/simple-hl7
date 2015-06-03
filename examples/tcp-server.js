var server = require('../lib/index');
var hl7    = require('../lib/index.js');
var server = hl7.Server;


var tcpServer = server.createTcpServer();

tcpServer.on('msg', function(hl7) {
  console.log(hl7.toString());
});

tcpServer.start(9696);

console.log('listening...')
