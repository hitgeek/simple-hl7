var EventEmitter = require('events').EventEmitter;
var fs           = require('fs');
var Parser       = require('../hl7/parser.js');
var util         = require('util');
var watch        = require('watch');


function FileServer(options, handler) {
  EventEmitter.call(this);

  if (!handler) {
    handler = options;
    options = {};
  }

  this.monitor = null;
  this.handler = handler;
  this.parser = options.parser || new Parser();
}

util.inherits(FileServer, EventEmitter);

function Req(msg, f) {
  this.file = f;
  this.msg = msg;
  this.sender = msg.header.getField(1).length == 1 ?
    msg.header.getField(1).toString() :
    msg.header.getField(1);

  this.facility = msg.header.getField(2).length == 1 ?
    msg.header.getField(2).toString() :
    msg.header.getField(2);

  this.type = msg.header.getComponent(7, 1).toString();
  this.event = msg.header.getComponent(7, 2).toString();
}

function Res() {

}

FileServer.prototype.start = function(src) {
  var self = this;
  var createdFiles = [];

  setTimeout(function() {
    createdFiles = [];
  }, 3000);



  watch.createMonitor(src, function(monitor) {
    self.monitor = monitor;

    self.monitor.on("created", function(f, stat) {

      if (createdFiles.indexOf(f) == -1) {
        createdFiles.push(f);

        fs.readFile(f, function(err, data) {
          if (err) {
            self.handler(err);
            return;
          }

          try {
            var hl7 = self.parser.parse(data.toString());
            var req = new Req(hl7, f);
            var res = new Res();
            self.handler(null, req, res);
          } catch (e) {
            self.handler(e);
          }
        });
      }

    });

  });
}

FileServer.prototype.stop = function() {
  this.monitor.stop()
}


module.exports = FileServer;
