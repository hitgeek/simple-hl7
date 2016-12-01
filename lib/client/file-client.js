var fs   = require('fs');
var path = require('path')


function FileClient(dest) {
  this.dest = dest;
}


FileClient.prototype.send = function(msg, callback) {
  try {
    fs.writeFile(path.join(this.dest, msg.header.fields[7].value[0][0].value[0][0] + '.hl7'), msg.toString());
    callback()
  }
  catch (err) {
    callback(err)
  }
}

module.exports = FileClient
