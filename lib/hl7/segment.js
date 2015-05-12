/*
Segment

Segment works differently than fields and components, because they do not repeat in the same way.
For a segment is value is an array, but think of it as an array of fields NOT AN ARRAY OF Segments (field is an array of itself, segment is not)

constructor syntax

the contrustor syntax for segment is a little different
if takes unlimitd number of arguments, and turns everything after the first one into a field and adds to to the value array
you can use field contrustor syntake here

var s = new segment("NAME", "first field", "second field", ["field with compoents"])


addField, editField, and removeField are just sugar wrapping the array of fields
you could also just work directly with the array
these take a non zero based index, which makes matching to specs a bit easier
*/

var field = require('./field');

var segment = function() {

  this.name = "";
  this.value = [];

  if (arguments.length >= 1) {
    this.name = arguments[0]
  }

  if (arguments.length >= 2) {

    if (Array.isArray(arguments[i])) {
      var fields = new Array();
      for (var ii = 0; ii < arguments[i].length; ii++) {
        fields.push(new field(arguments[i][ii]));
      }
      this.value.push(fields);
    } else {
      for (var i = 1; i < arguments.length; i++) {
        this.value.push(new field(arguments[i]));
      }
    }

  }

}

segment.prototype.addField = function(fieldValue) {
  this.value.push(new field(fieldValue));
}

segment.prototype.editField = function(index, fieldValue) {
  this.value[index - 1] = new field(fieldValue);
}

segment.prototype.removeField = function(index) {
  this.value.splice(index - 1, 1);
}

segment.prototype.toString = function(delimiters) {

  var returnString = this.name + delimiters.fieldSeperator;

  for (var i = 0; i < this.value.length; i++) {

    returnString += this.value[i].toString(delimiters);

    if (i != this.value.length -1) returnString += delimiters.fieldSeperator

  }

  return returnString;
}

module.exports = segment;
