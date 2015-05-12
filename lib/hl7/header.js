var field = require('./field');

function header() {

  this.name = "MSH";
  this.delimiters = {
    fieldSeperator: "|",
    componentSeperator: "^",
    subcomponentSeperator: "&",
    escapeCharacter: "\\",
    repititionCharacter: "~",
    segmentSeperator: '\r'
  }

  this.value = [];

  if (arguments.length > 1) {

    for (var i = 0; i < arguments.length; i++) {

      if (Array.isArray(arguments[i])) {
        var fields = new Array();
        for (var ii = 0; ii < arguments[i].length; ii++) {
          fields.push(new field(arguments[i][ii]));
        }
        this.value.push(fields);
      } else {
        for (var i = 0; i < arguments.length; i++) {
          this.value.push(new field(arguments[i]));
        }
      }

    }

  }

}

header.prototype.addField = function(fieldValue) {
  this.value.push(new field(fieldValue));
}

header.prototype.editField = function(index, fieldValue) {
  this.value[index - 1] = new field(fieldValue);
}

header.prototype.removeField = function(index) {
  this.value.splice(index - 1, 1);
}

header.prototype.toString = function() {
  var returnString =
    this.name +
    this.delimiters.fieldSeperator +
    this.delimiters.componentSeperator +
    this.delimiters.repititionCharacter +
    this.delimiters.escapeCharacter +
    this.delimiters.subcomponentSeperator +
    this.delimiters.fieldSeperator

    for (var i = 0; i < this.value.length; i++) {
      returnString += this.value[i].toString(this.delimiters);

      if (i != this.value.length -1) returnString += this.delimiters.fieldSeperator

    }

    return returnString;

}

module.exports = header;
