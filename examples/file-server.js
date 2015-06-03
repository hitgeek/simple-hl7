var fs     = require('fs')
var hl7    = require('../lib/index.js');
var server = hl7.Server;


var fileServer = new server.createFileServer();

fileServer.on("msg", function(newFile) {
  console.log(newFile.path);
  console.log(newFile.hl7.toString());
  fs.unlink(newFile.path, function() {
    console.log('removed');
  });
});

fileServer.start('test/import/');

console.log('File Serve Listening....');
