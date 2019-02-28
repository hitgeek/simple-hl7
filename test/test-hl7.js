var assert     = require("assert")
var component  = require('../lib/hl7/component');
var delimiters = require('../lib/hl7/delimiters')
var field      = require('../lib/hl7/field');
var fs         = require('fs');
var header     = require('../lib/hl7/header');
var message    = require('../lib/hl7/message');
var Parser     = require('../lib/hl7/parser');
var segment    = require('../lib/hl7/segment');

var delimiters = {
  subcomponentSeperator: "&",
  repititionCharacter: "~",
  componentSeperator: "^",
  fieldSeperator: "|"
}
var parser = new Parser();

describe('Component', function() {
  describe('.toString()', function() {
    it('should return hl7 with proper structure for various formats', function() {

      var singleComponent = new component("Single Component");
      var componentWithSubcomponents = new component(["First Component", "Second Component"]);
      var repeatingComponent = new component("First Repeat", "Second Repeat");
      var repeatingComponentWithSubComponents = new component(
          ["First Component", "Second Component"],
          ["First Repeat", "Second Repeat"]
      );

      assert.equal(singleComponent.toString(delimiters), "Single Component");
      assert.equal(componentWithSubcomponents.toString(delimiters), "First Component&Second Component");
      assert.equal(repeatingComponent.toString(delimiters), "First Repeat~Second Repeat");
      assert.equal(repeatingComponentWithSubComponents.toString(delimiters), "First Component&Second Component~First Repeat&Second Repeat");
    });
  });
});

describe("Field", function() {
  describe(".toString()", function() {
    it('should return hl7 with proper structure for various formats', function() {
      var singleValueField = new field("Field Value");
      var repeatingSingleValueField = new field("Field Value", "Repeat Field Value");
      var fieldWithComponents = new field(["Component 1", "Component 2"]);
      var fieldWithComponentsWithSubcomponents = new field([
        "Component 1",
        ["Component 2 Subcomponent 1", "Component 2 Subcomponent 2"],
        "Component 3"
      ]);

      assert.equal(singleValueField.toString(delimiters), "Field Value");
      assert.equal(repeatingSingleValueField.toString(delimiters), "Field Value~Repeat Field Value");
      assert.equal(fieldWithComponents.toString(delimiters), "Component 1^Component 2");
      assert.equal(fieldWithComponentsWithSubcomponents.toString(delimiters), "Component 1^Component 2 Subcomponent 1&Component 2 Subcomponent 2^Component 3");

    })
  });
});

describe("Segment", function() {
  describe(".toString()", function() {
    it('should return hl7 with proper structure for various formats', function() {
      var segmentWithSingleValueFields = new segment("NME", "Field 1", "Field 2", "Field 3");
      var segmentWithComponentValueFields = new segment("NME", ["Component 1", "Component 2"], "Field 3");

      assert.equal(segmentWithSingleValueFields.toString(delimiters), "NME|Field 1|Field 2|Field 3");
      assert.equal(segmentWithComponentValueFields.toString(delimiters), "NME|Component 1^Component 2|Field 3");
    });
  });
  describe(".addField()", function() {
    it('should add a field, check using toString()', function() {
      var segmentWithNoFields = new segment("NME");
      segmentWithNoFields.addField("Field Value");

      assert.equal(segmentWithNoFields.toString(delimiters), "NME|Field Value");

      segmentWithNoFields.addField(["Component 1", "Component 2"]);

      assert.equal(segmentWithNoFields.toString(delimiters), "NME|Field Value|Component 1^Component 2");

      segmentWithNoFields.addField("Field Value");

      assert.equal(segmentWithNoFields.toString(delimiters), "NME|Field Value|Component 1^Component 2|Field Value");
    });
  });
  describe(".setField()", function() {
    it('should swap a field at certain index, check using toString()', function() {
      var simpleSegment = new segment("NME", "Field 1", "Field 2", "Field 3");

      assert.equal(simpleSegment.toString(delimiters), "NME|Field 1|Field 2|Field 3");

      simpleSegment.setField(2, ["Component 1", "Component 2"]);

      assert.equal(simpleSegment.toString(delimiters), "NME|Field 1|Component 1^Component 2|Field 3");
    });
  });
  describe(".removeField()", function() {
    it('should remove a field, not sure why you would do this, check using toString()', function() {
      var simpleSegment = new segment("NME", "Field 1", "Field 2", "Field 3");

      assert.equal(simpleSegment.toString(delimiters), "NME|Field 1|Field 2|Field 3");

      simpleSegment.removeField(2);

      assert.equal(simpleSegment.toString(delimiters), "NME|Field 1|Field 3");
    });
  });
  describe('.getField(x)', function() {
    it('should return a single field from the field value array', function() {
      var simpleSegment = new segment("NME", "Field 1", "Field 2", ["Component 1", "Component 2"]);

      assert.equal(simpleSegment.getField(2), "Field 2");
      assert.equal(simpleSegment.getField(3), "Component 1^Component 2");
      assert.equal(simpleSegment.getField(5), "");
    });
  });
  describe('.getField(x, z)', function() {
    it('should return a repeating field value', function() {
      var simpleSegment = new segment("NME");
      simpleSegment.fields.push(new field("One", "Two"));

      assert.equal(simpleSegment.getField(1, 1), "One");
      assert.equal(simpleSegment.getField(1, 2), "Two");
    });
  });
  describe('.getComponent(x)', function(){
    it('should return the component at index', function() {
      var simpleSegment = new segment("NME", "Field 1", "Field 2", ["Component 1", "Component 2"]);
      assert.equal(simpleSegment.getComponent(3, 1), "Component 1");
      assert.equal(simpleSegment.getComponent(3, 2), "Component 2");
      assert.equal(simpleSegment.getComponent(3, 3), "");
    });
  });
  describe('.getComponent(x, z)', function(){
    it('should return the sub component at index', function() {
      var simpleSegment = new segment("NME", ["Component 1", ["Sub1", "Sub2"]]);

      assert.equal(simpleSegment.getComponent(1, 2, 1), "Sub1");
      assert.equal(simpleSegment.getComponent(1, 2, 2), "Sub2");
      assert.equal(simpleSegment.getComponent(1, 2, 3), "");
    });
  });
  describe('.setComponent(x, v)', function(){
    it('should return the component at index', function() {
      var simpleSegment = new segment("NME", "Field 1", "Field 2", ["Component 1", "Component 2", ["Sub1", "Sub2"]]);
      assert.equal(simpleSegment.getComponent(3, 1), "Component 1");
      simpleSegment.setComponent(3, 1, "Component 1 Update");
      assert.equal(simpleSegment.getComponent(3, 1), "Component 1 Update");
      simpleSegment.setComponent(3, 3, [ "Sub1 Update", "Sub2 Update" ]);
      assert.equal(simpleSegment.getComponent(3, 3), "Sub1 Update&Sub2 Update");
    });
  });
});

describe("Header", function() {
  describe(".toString()", function() {
    it('same as segment, but with some special sauce', function() {
      var defaultHeader = new header();

      assert.equal(defaultHeader.toString(delimiters), "MSH|^~\\&|");

      var headerWithFields = new header("Field 1", "Field 2", ["Component 1", "Component 2"]);

      assert.equal(headerWithFields.toString(delimiters), "MSH|^~\\&|Field 1|Field 2|Component 1^Component 2");
    });
  });
  describe(".addField()", function() {
    it('should add a field, check using toString()', function() {
      var segmentWithNoFields = new header();
      segmentWithNoFields.addField("Field Value");

      assert.equal(segmentWithNoFields.toString(delimiters), "MSH|^~\\&|Field Value");

      segmentWithNoFields.addField(["Component 1", "Component 2"]);

      assert.equal(segmentWithNoFields.toString(delimiters), "MSH|^~\\&|Field Value|Component 1^Component 2");

      segmentWithNoFields.addField("Field Value");

      assert.equal(segmentWithNoFields.toString(delimiters), "MSH|^~\\&|Field Value|Component 1^Component 2|Field Value");
    });
  });
  describe(".setField()", function() {
    it('should swap a field at certain index, check using toString()', function() {
      var simpleSegment = new header("Field 1", "Field 2", "Field 3");

      assert.equal(simpleSegment.toString(delimiters), "MSH|^~\\&|Field 1|Field 2|Field 3");

      simpleSegment.setField(2, ["Component 1", "Component 2"]);

      assert.equal(simpleSegment.toString(delimiters), "MSH|^~\\&|Field 1|Component 1^Component 2|Field 3");
    });
  });
  describe(".removeField()", function() {
    it('should remove a field, not sure why you would do this, check using toString()', function() {
      var simpleSegment = new header("Field 1", "Field 2", "Field 3");

      assert.equal(simpleSegment.toString(delimiters), "MSH|^~\\&|Field 1|Field 2|Field 3");

      simpleSegment.removeField(2);

      assert.equal(simpleSegment.toString(delimiters), "MSH|^~\\&|Field 1|Field 3");
    });
  });
  describe('.getField()', function() {
    it('should return a single field from the field value array', function() {
      var simpleSegment = new header("Field 1", "Field 2", ["Component 1", "Component 2"]);

      assert.equal(simpleSegment.getField(2), "Field 2");
      assert.equal(simpleSegment.getComponent(3, 1), "Component 1");

    });
  });
});

describe("Message", function() {
  describe(".toString()", function() {
    it('should print out structured hl7 message', function() {
      var emptyMessageWithSomeHeader = new message("Header Field 1", "Header Field 2");

      assert.equal(emptyMessageWithSomeHeader.toString(delimiters), "MSH|^~\\&|Header Field 1|Header Field 2");
    });
  });
  describe(".addSegment()", function() {
    it('should add segment with different syntaxes, check with toString()', function() {
      var emptyMessageWithSomeHeader = new message("Header Field 1", "Header Field 2");
      emptyMessageWithSomeHeader.addSegment("NME", "Field 1", "Field 2");

      assert.equal(emptyMessageWithSomeHeader.toString(delimiters), "MSH|^~\\&|Header Field 1|Header Field 2\rNME|Field 1|Field 2");

      emptyMessageWithSomeHeader.addSegment("NME", "Field 1", ["Component 1", "Component 2"]);

      assert.equal(emptyMessageWithSomeHeader.toString(delimiters),
      "MSH|^~\\&|Header Field 1|Header Field 2\rNME|Field 1|Field 2\rNME|Field 1|Component 1^Component 2");
    });
  });
  describe(".getSegment()", function() {
    it('should get a segment for modification and you can change it with segment API, check with toString()', function() {
      var emptyMessageWithSomeHeader = new message("Header Field 1", "Header Field 2");
      emptyMessageWithSomeHeader.addSegment("NME", "Field 1", "Field 2");

      var segmentFromMessage = emptyMessageWithSomeHeader.getSegment("NME");

      assert.equal(segmentFromMessage.toString(delimiters), "NME|Field 1|Field 2");

      segmentFromMessage.setField(1, ["Component 1", "Component 2"]);

      assert.equal(segmentFromMessage.toString(delimiters), "NME|Component 1^Component 2|Field 2");
      assert.equal(emptyMessageWithSomeHeader.toString(delimiters), "MSH|^~\\&|Header Field 1|Header Field 2\rNME|Component 1^Component 2|Field 2");

    });
  });
  describe(".getSegments()", function() {
    it('should return an array of segments, and if no segments return empy array', function() {
      var messageWithRepeatingSegments = new message("Header Field 1", "Header Field 2");
      messageWithRepeatingSegments.addSegment("NME", "Field 1", "Field 2");
      messageWithRepeatingSegments.addSegment("NME", "Field 3", "Field 4");

      var nmeSegments = messageWithRepeatingSegments.getSegments("NME");
      assert.equal(nmeSegments.length, 2);
      assert.equal(nmeSegments[0].toString(messageWithRepeatingSegments.header.delimiters), "NME|Field 1|Field 2");
      assert.equal(nmeSegments[1].toString(messageWithRepeatingSegments.header.delimiters), "NME|Field 3|Field 4");

    });
  })
});

describe("Parser", function() {
  describe(".parse()", function() {
    it('should parse message with different segment seperators', function() {
      var msg1 = "MSH|^~\\&|Header Field 1|Header Field 2\rNME|Component 1^Component 2|Field 2"
      var msg2 = "MSH|^~\\&|Header Field 1|Header Field 2\nNME|Component 1^Component 2|Field 2"

      var x = parser.parse(msg1);

      assert.equal(parser.parse(msg1).segments.length, 1);
      assert.equal(new Parser({segmentSeperator: '\n'}).parse(msg2).segments.length, 1);
    });
  });
  describe("Parse sample documents. Success = output same as input", function() {
    it('should parse all the sample documents', function() {
      var samples = fs.readdirSync('test/samples');
      var samples = samples.filter(function(x) { return x.indexOf('.hl7') > -1 });

      samples.forEach(function(x) {

        var sampleText = fs.readFileSync('test/samples/' + x).toString().replace(/\r?\n/g, "\r").trim();
        var sampleParse = parser.parse(sampleText);

        assert.ok(sampleParse.segments.length > 0);
        assert.equal(sampleParse.toString(), sampleText);
      });
    });
  });
  describe("Ignore Empty Lines", function() {
    it('should parse the correct number of segments', function() {
      var sample = fs.readFileSync('test/samples/adt.txt');
      var adt = parser.parse(sample.toString().replace(/\r?\n/g, "\r"));
      assert.equal(adt.segments.length, 3);
    })
  })
});
