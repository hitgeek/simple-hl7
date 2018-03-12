# simple-hl7
![Image Build Status](https://travis-ci.org/hitgeek/simple-hl7.svg?branch=master)

A simple library for creating HL7 middleware, based on connect & express.


```js
var hl7 = require('simple-hl7');

///////////////////SERVER/////////////////////
var app = hl7.tcp();

app.use(function(req, res, next) {
  //req.msg is the HL7 message
  console.log('******message received*****')
  console.log(req.msg.log());
  next();
})

app.use(function(req, res, next){
  //res.ack is the ACK
  //acks are created automatically

  //send the res.ack back
  console.log('******sending ack*****')
  res.end()
})

app.use(function(err, req, res, next) {
  //error handler
  //standard error middleware would be
  console.log('******ERROR*****')
  console.log(err);
  var msa = res.ack.getSegment('MSA');
  msa.editField(1, 'AR');
  res.ack.addSegment('ERR', err.message);
  res.end();
});

//Listen on port 7777
app.start(7777);
///////////////////SERVER/////////////////////

///////////////////CLIENT/////////////////////
var client = hl7.Server.createTcpClient('localhost', 7777);

//create a message
var msg = new hl7.Message(
                    "EPIC",
                    "EPICADT",
                    "SMS",
                    "199912271408",
                    "CHARRIS",
                    ["ADT", "A04"], //This field has 2 components
                    "1817457",
                    "D",
                    "2.5"
                );

console.log('******sending message*****')
client.send(msg, function(err, ack) {
  console.log('******ack received*****')
  console.log(ack.log());
});
///////////////////CLIENT/////////////////////
```

## Installation

```bash
$ npm install simple-hl7
```

## Features

  * Parser
  * Message Builder/Editor API
  * Server/Client components for TCP and File System Based Interfaces

## Philosophy
Make HL7 interfaces and middleware as easy as express web servers.

## Examples
See examples & tests folder on github.

## People
Author: Bob Rupp bob@rupp.io

## License
MIT
