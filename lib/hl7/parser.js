var component = require('./component');
var field = require('./field');
var fs = require('fs');
var header = require('./header');
var message = require('./message');
var segment = require('./segment');

function parser(opts) {
  this.message = null;
  this.delimiters = {
    fieldSeperator: '|',
    componentSeperator: '^',
    subcomponentSeperator: '&',
    escapeCharacter: '\\',
    repetitionCharacter: '~',
    segmentSeperator: opts ? opts.segmentSeperator : undefined,
  };
}

parser.prototype.parse = function (s) {
  if (!this.delimiters.segmentSeperator) {
    var usesLineFeeds = s.indexOf('\n') > -1;
    var usesCarriageReturns = s.indexOf('\r') > -1;
    this.delimiters.segmentSeperator = usesLineFeeds ? (usesCarriageReturns ? '\r\n' : '\n') : '\r';
  }

  this.message = new message();
  var segments = s.split(this.delimiters.segmentSeperator);

  for (var i = 0; i < segments.length; i++) {
    if (i == 0) {
      this.message.header = this.parseHeader(segments[i]);
    } else {
      if (segments[i].trim() != '') {
        this.message.segments.push(this.parseSegment(segments[i]));
      }
    }
  }

  return this.message;
};

parser.prototype.parseFile = function (path, callback) {
  var _p = this;
  fs.readFile(path, function (err, data) {
    return callback(_p.parse(data.toString()));
  });
};

parser.prototype.parseFileSync = function (path) {
  var _p = this;
  var data = fs.readFileSync(path);
  return _p.parse(data.toString());
};

parser.prototype.parseHeader = function (s) {
  var h = new header();
  var fields = s.split(this.delimiters.fieldSeperator);

  for (var i = 2; i < fields.length; i++) {
    h.fields.push(this.parseField(fields[i]));
  }

  return h;
};

parser.prototype.parseSegment = function (s) {
  var seg = new segment();
  var fields = s.split(this.delimiters.fieldSeperator);

  seg.name = fields[0];

  for (var i = 1; i < fields.length; i++) {
    seg.fields.push(this.parseField(fields[i]));
  }

  return seg;
};

parser.prototype.parseField = function (s) {
  var f = new field();

  if (s.indexOf(this.delimiters.repetitionCharacter) != -1) {
    var _fs = s.split(this.delimiters.repetitionCharacter);
    for (var i = 0; i < _fs.length; i++) {
      var cs = _fs[i].split(this.delimiters.componentSeperator);
      var c = [];
      for (var ii = 0; ii < cs.length; ii++) {
        c.push(this.parseComponent(cs[ii]));
      }
      c.toString = function (delimiters) {
        var returnString = '';

        for (var i = 0; i < this.length; i++) {
          returnString += this[i].toString(delimiters);
          if (i != this.length - 1) returnString += delimiters.componentSeperator;
        }

        return returnString;
      };
      f.value.push(c);
    }
  } else {
    var components = s.split(this.delimiters.componentSeperator);
    var cs = [];
    for (var i = 0; i < components.length; i++) {
      cs.push(this.parseComponent(components[i]));
    }
    cs.toString = function (delimiters) {
      var returnString = '';

      for (var i = 0; i < this.length; i++) {
        returnString += this[i].toString(delimiters);
        if (i != this.length - 1) returnString += delimiters.componentSeperator;
      }

      return returnString;
    };
    f.value.push(cs);
  }

  return f;
};

parser.prototype.parseComponent = function (s) {
  var c = new component();
  var subcomponents = s.split(this.delimiters.subcomponentSeperator);
  for (var i = 0; i < subcomponents.length; i++) {
    c.value.push(subcomponents[i]);
  }
  return c;
};

module.exports = parser;
