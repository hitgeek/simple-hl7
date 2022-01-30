var field = require('./field');
var delimiters = require('./delimiters');
var segment = require('./segment');

function header() {

  this.name = "MSH";
  this.delimiters = {
    fieldSeperator: "|",
    componentSeperator: "^",
    subcomponentSeperator: "&",
    escapeCharacter: "\\",
    repititionCharacter: "~",
    segmentSeperator: '\r'
  };

  this.fields = [];

  if (arguments.length > 1) {

    for (var i = 0; i < arguments.length; i++) {

      if (Array.isArray(arguments[i])) {
        var fields = new Array();
        for (var ii = 0; ii < arguments[i].length; ii++) {
          fields.push(new field(arguments[i][ii]));
        }
        this.fields.push(fields);
      } else {
        for (var i = 0; i < arguments.length; i++) {
          this.fields.push(new field(arguments[i]));
        }
      }
    }
  }
}

header.prototype.addHeaderField = function(fieldValue, position) {
  if (position) {
    return this.addField(fieldValue, position - 2) 
  } else {
    return this.addField(fieldValue);
  }
  
}

header.prototype.addField = segment.prototype.addField;

header.prototype.setHeaderField = function(index, fieldValue) {
  return this.setField(index - 2, fieldValue);
}

header.prototype.setField = segment.prototype.setField;

header.prototype.removeHeaderField = function(index) {
  return this.removeField(index - 2);
}

header.prototype.removeField = segment.prototype.removeField;

header.prototype.getHeaderField = function(index, repeatIndex) {
  if (index == 1) {
    return this.delimiters.fieldSeperator;
  }

  if (index == 2) {
    return this.delimiters.componentSeperator 
    + this.delimiters.subcomponentSeperator
    + this.delimiters.escapeCharacter
    + this.delimiters.repititionCharacter
    + this.delimiters.subcomponentSeperator
  }

  return this.getField(index - 2, repeatIndex);
}

header.prototype.getField = segment.prototype.getField;

header.prototype.getHeaderComponent = function(fieldIndex, componentIndex, subComponentIndex) {
  return this.getComponent(fieldIndex - 2, componentIndex, subComponentIndex);
}

header.prototype.getComponent = segment.prototype.getComponent;

header.prototype.toString = function() {
  var returnString =
    this.name +
    this.delimiters.fieldSeperator +
    this.delimiters.componentSeperator +
    this.delimiters.repititionCharacter +
    this.delimiters.escapeCharacter +
    this.delimiters.subcomponentSeperator +
    this.delimiters.fieldSeperator

    for (var i = 0; i < this.fields.length; i++) {
      returnString += this.fields[i].toString(this.delimiters);

      if (i != this.fields.length - 1) returnString += this.delimiters.fieldSeperator

    }
    return returnString;
}

module.exports = header;
