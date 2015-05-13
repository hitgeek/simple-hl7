var header = require('./header');
var segment = require('./segment');

//constructor
function message() {

  this.header = new header();
  this.segments = [];

  if (arguments.length > 0) {

    for (var i = 0; i < arguments.length; i++) {
      this.header.addField(arguments[i]);
    }

  }

}


//api
message.prototype.getSegment = function(name) {
  for (var i = 0; i < this.segments.length; i++) {
    if (this.segments[i].name == name) return this.segments[i]
  }
}

message.prototype.addSegment = function() {

  if (arguments.length == 1) {
    this.segments.push(new segment(arguments[0]));
  }

  if (arguments.length > 1) {
    var s = new segment(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
      s.addField(arguments[i]);
    }
    this.segments.push(s);
  }


}

message.prototype.toString = function() {
  var returnString = this.header.toString() + this.header.delimiters.segmentSeperator;

  for (var i = 0; i < this.segments.length; i++) {
    returnString += this.segments[i].toString(this.header.delimiters);

    if (i != this.segments.length - 1) returnString += this.header.delimiters.segmentSeperator;
  }

  return returnString.replace(/^\s+|\s+$/g, '');
}


//export
module.exports = message;
