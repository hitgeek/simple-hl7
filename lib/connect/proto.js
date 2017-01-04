

var proto = {}
module.exports = proto;

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

proto.use = function(fn) {
  var handle = fn;

  this.stack.push({handle: handle});
}

proto._handle = function(req, res) {
  var index = 0;
  var stack = this.stack;

  function next(err) {

    var layer = stack[index++];

    if (!layer) {
      return;
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