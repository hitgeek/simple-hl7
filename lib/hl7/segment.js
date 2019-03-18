var field = require('./field');
var component = require('./component');
var delimiters = require('./delimiters');

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
      while (currentLength <= (position-2)) {
        this.addField("");
        currentLength = this.fields.length;
      }
      this.addField(fieldValue)
    }
  }
  else
  {
    if ((typeof fieldValue) == 'object') {
      if (Array.isArray(fieldValue)) {
        this.fields.push(new field(fieldValue));
      } else {
        this.fields.push(fieldValue);
      }
    } else {
      this.fields.push(new field(fieldValue));
    }
    
  }
}

segment.prototype.setField = function(index, fieldValue) {
  if (this.fields.length >= index) {
    this.fields[index - 1] = new field(fieldValue);
  }
}

segment.prototype.removeField = function(index) {
  if (this.fields.length >= index) {
    this.fields.splice(index - 1, 1);
  }
}

segment.prototype.getField = function(index, repeatIndex) {
  if (this.fields.length >= index) {
    var field = this.fields[index - 1]
    if (repeatIndex) {
      if (field.value.length >= repeatIndex) {
        return field.value[repeatIndex - 1].toString(delimiters);
      }
      return ""
    }
    return field.toString(delimiters);
  }
  return "";
}

segment.prototype.getComponent = function(fieldIndex, componentIndex, subComponentIndex) {
  if (this.fields.length >= fieldIndex) {
    var components = this.fields[fieldIndex - 1].value[0];
    if (components.length >= componentIndex) {
      var component = components[componentIndex - 1]
      if (subComponentIndex) {
        if (component.value[0].length >= subComponentIndex) {
          return component.value[0][subComponentIndex - 1].toString(delimiters)
        }
        return "";
      }
      return component.toString(delimiters);
    }
    return "";
  }
  return "";
}

segment.prototype.setComponent = function(fieldIndex, componentIndex, value) {
  if (this.fields.length >= fieldIndex) {
    var components = this.fields[fieldIndex - 1].value[0];
    if (components.length >= componentIndex) {
      components[componentIndex - 1] = new component(value);
    }
  }
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
