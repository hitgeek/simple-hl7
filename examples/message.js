var hl7 = require('../lib/index.js');

/*
The message constructor creates the MSH segment. Each argument is a field.
*/

var adt = new hl7.Message(
                    "EPIC",
                    "EPICADT",
                    "SMS",
                    "199912271408",
                    "CHARRIS",
                    ["ADT", "A04"] //This field has 2 components
                    //Keep adding fields
                );

/*
.addSegment() takes similiar syntax as Message constructor.
The first argument is segment name, and the rest of the arguments are added as fields.
*/

adt.addSegment("PID",
            "", //Blank field
            ["0493575", "", "", "2", "", "ID 1"], //Multiple components
            "454721",
            "",
            ["DOE", "JOHN", "", "", "", ""],
            "19480203",
            new hl7.Field("First", "Second") //REPEATING FIELD
            //Keep adding arguments to add more fields
        );
  
var pid = adt.getSegment("PID");
pid.addField(new hl7.Field("First", "Second"), 8);


pid.fields.push(new hl7.Field("First", "Second"));


adt.addSegment("OBX",
            1, //Blank field
            ["JHDL", "HDL Cholesterol (CAD)"], //Multiple components
            1,
            62,
            ["CD:289", "mg/dL"],
            [">40", "40"]
        );

adt.addSegment("OBX",
            1, //Blank field
            ["JTRIG", "Triglyceride (CAD)"], //Multiple components
            1,
            15,
            ["CD:289", "mg/dL"],
            ["35-150", "35", "150"]
        );




console.log(adt.log());

/*
MSH|^~\&|EPIC|EPICADT|SMS|199912271408|CHARRIS|ADT^A04
PID||0493575^^^2^^ID 1|454721||DOE^JOHN^^^^|19480203
*/

console.log('-----The Date of Birth in PID.6 will get updated-----')

var parser = new hl7.Parser();

/*
Parse any HL7 message string, could be from File, TCP Socket, Web Service.
*/
var msg = parser.parse(adt.toString());

/*
Message.getSegment() takes the Segment name as argument, and returns a Segment object.
Segment objects expose .editField, .addField, and .removeField
*/

msg.getSegment("PID").setField(6, "19580302");

console.log(msg.log());


console.log('-----Lets use Get Segments to look for Abnormal Values----')

//the value of fields.value is always and array, because fields can repeat.
//a more elegant API for this will probably be added
msg.getSegments("OBX").forEach(function(segment) {
  var testName = segment.fields[1].value[0][1];
  var result = segment.fields[3].value[0][0];
  var lowRange = segment.fields[5].value[0][1];

  if (result < lowRange) {
    console.log(testName + " was low. Result: " + result + ", Low Range: " + lowRange);
  }
});



