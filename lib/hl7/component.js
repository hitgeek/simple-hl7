
function component() {

  this.value = [];

  if (arguments.length > 0) {
    for (var i = 0; i < arguments.length; i++) {
      this.value.push(arguments[i]);
    }
  }

}

component.prototype.toString = function(delimiters) {
  var returnString = "";

  for (var i = 0; i < this.value.length; i++) {

    if (Array.isArray(this.value[i])) {

      for (var ii = 0; ii < this.value[i].length; ii++) {
        returnString += this.value[i][ii];
        if (ii != this.value[i].length - 1) returnString += delimiters.subcomponentSeperator
      }

    } else {

      returnString += this.value[i];

    }

    if (i != this.value.length - 1) returnString += delimiters.repititionCharacter
  }

  return returnString;
}


module.exports = component;
