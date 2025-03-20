// old behavior is that component handles repetition and subcomponents
// but actually component should only handle subcomponents
// and repetition should be handled by field

function component() {
  this.value = [];

  if (arguments.length > 0) {
    for (var i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        for (var ii = 0; ii < arguments[i].length; ii++) {
          this.value.push(arguments[i][ii]);
        }
      } else {
        this.value.push(arguments[i]);
      }
    }
  }
}

component.prototype.toString = function (delimiters) {
  var returnString = '';

  for (var i = 0; i < this.value.length; i++) {
    returnString += this.value[i].toString(delimiters);
    // if (i != this.value[i].length - 1) returnString += delimiters.subcomponentSeperator;
    if (i != this.value.length - 1) returnString += delimiters.subcomponentSeperator;
  }

  return returnString;
};

module.exports = component;
