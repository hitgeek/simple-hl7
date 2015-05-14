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
            "19480203"
            //Keep adding arguments to add more fields
        );

console.log(adt.toString());

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

msg.getSegment("PID").editField(6, "19580302");

console.log(msg.toString());


