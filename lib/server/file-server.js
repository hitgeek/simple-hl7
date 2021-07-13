var EventEmitter = require('events').EventEmitter;
var fs           = require('fs');
var Parser       = require('../hl7/parser.js');
var path         = require('path');
var util         = require('util');


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

function Res(server, filePath) {

  this.end = function() {
    var i = server.processing.indexOf(filePath);
    if (i > -1) {
      server.processing.splice(i);
    }
  }  
}

FileServer.prototype.start = function (src) {
  var self = this;
  self.src = src;
  self.loop = setInterval(this.processFiles.bind(this), 3000);
  self.processing = [];
}

FileServer.prototype.stop = function () {
  var self = this;
  clearInterval(self.loop);
}

FileServer.prototype.processFiles = function () {
  var self = this;
  var src = this.src;

  fs.readdir(src, function (err, files) {
    if (err) {
      self.handler(err);
      return;
    }

    files.forEach(function (f) {
      if (f.startsWith(".")) return;
      var filePath = path.join(src, f);

      fs.lstat(filePath, function(err, stats) {
        var isFile = stats.isFile();
        if (!isFile) return;

        if (self.processing.indexOf(filePath) > -1) {
          return;
        };
  
        self.processing.push(filePath);
        fs.readFile(filePath, function (err, data) {
          if (err) {
            self.handler(err);
            return;
          }
  
          try {
            var hl7 = self.parser.parse(data.toString());
            var req = new Req(hl7, filePath);
            var res = new Res(self, filePath);
            self.handler(null, req, res);
          } catch (e) {
            self.handler(e);
          }
        });
      })
    })
  })
}

module.exports = FileServer;
