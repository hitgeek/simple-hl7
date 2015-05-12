/*
Field Component
Value is always an array.
Elements in the array can be strings or another array

If the element is a string, it is returned as is
If the element is an array, it is assumed it is a collection of subcomponents
If the value array has multiple items, it returned as a repeating component


constructor syntax

Single Component (most common)
  var c = new component("Value");

Single Component with subcomponents
  var c = new component(["Value 1", "Value 2"]);

Repeating Component
  var c = new component("Value 1", "Repeat Value 1");

Repeating with Subcomponents
  var c = new component(["Value 1, Value 2"], "Repeat Value")

*/

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
