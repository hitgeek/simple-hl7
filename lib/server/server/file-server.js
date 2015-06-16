var events = require('events');
var fs     = require('fs');
var Parser = require('../../hl7/parser.js');
var util   = require('util');
var watch  = require('watch');


function FileServer() {
  events.EventEmitter.call(this);

  this.monitor = null;
  this.parser = new Parser();

}

util.inherits(FileServer, events.EventEmitter);

FileServer.prototype.start = function(src) {
  var fileServer = this;
  var createdFiles = [];

  setTimeout(function(){
    createdFiles = [];
  }, 3000);

  watch.createMonitor(src, function(monitor) {
    fileServer.monitor = monitor;

    fileServer.monitor.on("created", function(f, stat) {

      if (createdFiles.indexOf(f) == -1) {

        createdFiles.push(f);
        fs.readFile(f, function(err, data) {
          if (err) throw err;

          fileServer.emit("msg", {
            path: f,
            hl7: fileServer.parser.parse(data.toString())
          });
        });
      }

    });

  });
}


module.exports = FileServer;
