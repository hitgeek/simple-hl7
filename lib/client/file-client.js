var fs   = require('fs');
var path = require('path')


function FileClient(dest) {
  this.dest = dest;
}


FileClient.prototype.send = function(msg, callback) {
  var messageId = msg.header.getField(8);
  fs.writeFile(path.join(this.dest, messageId + '.hl7'), msg.toString(), callback);
}

module.exports = FileClient
