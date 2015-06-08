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

  watch.createMonitor(src, function(monitor) {
    fileServer.monitor = monitor;

    fileServer.monitor.on("created", function(f, stat) {

      fs.readFile(f, function(err, data) {
        if (err) throw err;

        try {
          fileServer.emit("msg", {
            path: f,
            hl7: fileServer.parser.parse(data.toString())
          });
        }
        catch (err) {
          throw err;
        }

      });

    });

  });
}


module.exports = FileServer;
