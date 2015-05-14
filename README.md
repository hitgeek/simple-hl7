#simple-hl7
A small and simple library for creating and parsing version 2 HL7 messages.

```js
var hl7 = require('simple-hl7)'

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
```

## Installation

```bash
$ npm install simple-hl7
```

## Features

  * Build any HL7 message type with same simple syntax
  * Supports repeating fields and subcomponents
  * Parse any HL7 message type into standard simple structure
  * Edit parts of HL7 file and resave (perfect for preprocessing)

## Philosophy
This library has two goals. Create any HL7 message type with "visual" constructor syntax that mimics the structure of the message. Parse any HL7 messsage into a simple standard structure that can easy be modified in place. The supported message formats is not intended to be expansive but realistic based on common real world scenarios. 

## Examples
View the tests for examples of creating repeating fields, subcomponents and other less common formats.

## People
Author: Bob Rupp bob@rupp.io

##License
GNU
