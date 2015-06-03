var fs     = require('fs')
var hl7    = require('../lib/index.js');
var server = hl7.Server;

var parser = new hl7.Parser();
var hl7MessageString = fs.readFileSync('./test/samples/oru-imm.hl7').toString();

var msg = parser.parse(hl7MessageString);

var fileClient = server.createFileClient('./test/export/');

fileClient.send(msg, function() {
  console.log('sent!');
})
