#simple-hl7
A simple library for working with version 2 HL7 messages. It includes a parser, an API for creating messages, and server components for sending and receiving messages.

```js
var hl7    = require('simple-hl7');
var server = hl7.Server;

var tcpServer  = server.createTcpServer();

tcpServer.on('msg', function(msg) {
  //msg is a Message object from "simple-hl7". see simple-hl7 on npm/github for API

  //do something with message

  //ACKs handled automatically, so don't worry about them.
  //API for custom ACKS coming in the future
});

tcpServer.start(8080) //port number

var tcpClient = server.createTcpClient();
tcpClient.connect('127.0.0.1', 8080);
tcpClient.send(msg);

//There is also a FileClient and FileServer for simple file drop transfers

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

/*
MSH|^~\&|EPIC|EPICADT|SMS|199912271408|CHARRIS|ADT^A04
PID||0493575^^^2^^ID 1|454721||DOE^JOHN^^^^|19580302
*/

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

//Triglyceride (CAD) was low. Result: 15, Low Range: 35


```js

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
