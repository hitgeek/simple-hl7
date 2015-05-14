var component = require('./hl7/component');
var field     = require('./hl7/field');
var header    = require('./hl7/header');
var message   = require('./hl7/message');
var parser    = require('./hl7/parser.js');
var segment   = require('./hl7/segment');

module.exports.Component = component;
module.exports.Field     = field;
module.exports.Header    = header;
module.exports.Message   = message;
module.exports.Parser    = parser;
module.exports.Segment   = segment;