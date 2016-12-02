var EventEmitter = require('events').EventEmitter;
var merge        = require('utils-merge');
var server       = require('../index').Server;

module.exports = createServer;

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

var proto = {};

function createServer() {
  function app(err, req, res, next) {
    app._handle(req, res, next);
  }
  merge(app, proto);
  merge(app, EventEmitter.prototype);
  app.stack = [];
  return app;
}

proto.use = function(pd, fn) {
  var predicate = pd;
  var handle = fn;

  if (!fn) {
    handle = pd;
    predicate = function() { return true; }
  }

  this.stack.push({predicate: predicate, handle: handle});
}

proto.start = function() {
  console.log('server started');
  var fileServer = server.createFileServer(this);
  fileServer.start.apply(fileServer, arguments);
  return fileServer;
}

proto._handle = function(req, res) {
  var index = 0;
  var stack = this.stack;

  function next(err) {

    var layer = stack[index++];

    if (!layer) {
      return;
    }

    if (!layer.predicate(req)) {
      return next(err);
    }

    call(layer.handle, err, req, res, next);

  }

  next();

}

function call(handle, err, req, res, next) {
  var arity = handle.length;
  var error = err;
  var hasError = Boolean(err);

  try {
    if (hasError && arity === 4) {
      handle(err, req, res, next);
      return;
    } else if (!hasError && arity < 4) {
      handle(req, res, next);
      return;
    }
  } catch (e) {
    error = e;
  }

  next(error);
}
