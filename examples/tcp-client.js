var fs     = require('fs');
var hl7    = require('../lib/index.js');
var server = hl7.Server;

var parser = new hl7.Parser();
var tcpClient = server.createTcpClient();

tcpClient.connect('127.0.0.1', 9696);

setTimeout(function() {
    var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString());
    tcpClient.send(adt, function(ack) {
      console.log(ack.toString());

      tcpClient.close();
    })
}, 1000)
