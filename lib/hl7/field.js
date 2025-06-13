var component = require('./component');

function field() {
  this.value = [];

  if (arguments.length > 0) {
    for (var i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        var components = [];
        for (var ii = 0; ii < arguments[i].length; ii++) {
          components.push(new component(arguments[i][ii]));
        }
        components.toString = function (delimiters) {
          var returnString = '';

          for (var i = 0; i < this.length; i++) {
            returnString += this[i].toString(delimiters);
            if (i != this.length - 1) returnString += delimiters.componentSeperator;
          }

          return returnString;
        };

        this.value.push(components);
      } else {
        if (arguments[i] instanceof component) {
          this.value.push(arguments[i]);
        } else {
          this.value.push(new component(arguments[i]));
        }
      }
    }
  }
}

field.prototype.toString = function (delimiters) {
  var returnString = '';

  for (var i = 0; i < this.value.length; i++) {
    if (Array.isArray(this.value[i])) {
      for (var ii = 0; ii < this.value[i].length; ii++) {
        returnString += this.value[i][ii].toString(delimiters);
        if (ii != this.value[i].length - 1) returnString += delimiters.componentSeperator;
      }
    } else {
      returnString += this.value[i].toString(delimiters);
    }

    if (i != this.value.length - 1) returnString += delimiters.repetitionCharacter;
  }

  return returnString;
};

module.exports = field;
