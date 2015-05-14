var component = require('./component');
var field     = require('./field');
var header    = require('./header');
var message   = require('./message');
var segment   = require('./segment');

function parser() {

  this.delimiters = null;
  this.message = null;

}

parser.prototype.parse = function(s) {
  this.message = new message();
  this.delimiters = this.message.header.delimiters
  var segments = s.split(this.delimiters.segmentSeperator);

  for (var i = 0; i < segments.length; i++) {
    if (i == 0) {
      this.message.header = this.parseHeader(segments[i]);
    } else {
      this.message.segments.push(this.parseSegment(segments[i]));
    }

  }

  return this.message;

}

parser.prototype.parseHeader = function(s) {
  var h = new header();
  var fields = s.split(this.delimiters.fieldSeperator);

  for (var i = 2; i < fields.length; i++ ) {
    h.fields.push(this.parseField(fields[i]));
  }

  return h;
}

parser.prototype.parseSegment = function(s) {
  var seg = new segment();
  var fields = s.split(this.delimiters.fieldSeperator);

  seg.name = fields[0];

  for (var i = 1; i < fields.length; i++ ) {
    seg.fields.push(this.parseField(fields[i]));
  }

  return seg
}

parser.prototype.parseField = function(s) {
  var f = new field();

  if (s.indexOf(this.delimiters.repititionCharacter) != -1) {
    var fs = s.split(this.delimiters.repititionCharacter);
    for (var i = 0; i < fs.length; i++) {
      f.value.push(this.parseField(fs[i]));
    }
  } else {
    var components = s.split(this.delimiters.componentSeperator);
    var cs = []
    for (var i = 0; i < components.length; i++) {
      cs.push(this.parseComponent(components[i]));
    }
    f.value.push(cs);
  }

  return f;
}

parser.prototype.parseComponent = function(s) {
  var c = new component();
  if (s.indexOf(this.delimiters.repititionCharacter) != -1) {
    var cs = s.split(this.delimiters.repititionCharacter);
    for (var i = 0; i < cs.length; i++ ) {
      c.value.push(parseComponent(cs[i]));
    }
  } else {
    var subcomponents = s.split(this.delimiters.subcomponentSeperator);
    var subs = [];
    for (var i = 0; i < subcomponents.length; i++) {
      subs.push(subcomponents[i]);
    }
    c.value.push(subs);
  }
  return c
}


module.exports = parser;
