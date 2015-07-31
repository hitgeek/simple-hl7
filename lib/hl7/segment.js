var field = require('./field');

var segment = function() {

  this.name = "";
  this.fields = [];

  if (arguments.length >= 1) {
    this.name = arguments[0]
  }

  if (arguments.length >= 2) {

    if (Array.isArray(arguments[i])) {
      var fields = new Array();
      for (var ii = 0; ii < arguments[i].length; ii++) {
        fields.push(new field(arguments[i][ii]));
      }
      this.fields.push(fields);
    } else {
      for (var i = 1; i < arguments.length; i++) {
        this.fields.push(new field(arguments[i]));
      }
    }

  }

}

segment.prototype.addField = function(fieldValue, position) {
  //position is optional
  if(position)
  {
    if (this.fields.length > (position - 1)){
      this.editField(position, fieldValue);
    }
    else{
      currentLength = this.fields.length;
      do {
        this.addField("");
        currentLength = this.fields.length;
      } while (currentLength <= (position-2));
      this.addField(fieldValue)
    }
  }
  else
  {
    this.fields.push(new field(fieldValue));
  }
}

segment.prototype.editField = function(index, fieldValue) {
  this.fields[index - 1] = new field(fieldValue);
}

segment.prototype.removeField = function(index) {
  this.fields.splice(index - 1, 1);
}

segment.prototype.getField = function(index) {
  return this.fields[index - 1].value[0];
}

segment.prototype.getComponent = function(fieldIndex, componentIndex) {
  return this.fields[fieldIndex - 1].value[0][componentIndex - 1].value[0];
}

segment.prototype.toString = function(delimiters) {

  var returnString = this.name + delimiters.fieldSeperator;

  for (var i = 0; i < this.fields.length; i++) {

    returnString += this.fields[i].toString(delimiters);

    if (i != this.fields.length -1) returnString += delimiters.fieldSeperator

  }

  return returnString;
}

module.exports = segment;
