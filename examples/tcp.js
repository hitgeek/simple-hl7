var hl7 = require('../lib');

////////////////////SERVER///////////////////
var app = hl7.tcp();
app.use(function(req, res, next) {
  console.log('Message Recieved From ' + req.facility);
  console.log('Message Event: ' + req.event);
  console.log('Message Type: ' + req.type);
  next();
});

//create middleware
app.use(function(req, res, next) {
  //create middleware for certain message types
  if (req.type != 'ADT' || req.event != 'A04') {
    return next();
  }

  var pid = req.msg.getSegment('PID');
  var patient = pid.getComponent(5, 2) + ' ' + pid.getComponent(5, 1);

  console.log('Patient Info Is ' + patient);
  next();
});

//Send Ack
app.use(function(req, res, next) {
  console.log('************sending ack****************')
  res.end();
})

//Error Handler
app.use(function(err, req, res, next) {
  var msa = res.ack.getSegment('MSA');
  msa.editField(1, 'AR');
  res.ack.addSegment('ERR', err.message);
  res.end();
});


app.start(7777);
console.log('tcp interface listening on ' + 7777);
////////////////////SERVER///////////////////


////////////////////CLIENT///////////////////
var parser = new hl7.Parser({segmentSeperator: '\n'});
var client = hl7.Server.createTcpClient('localhost', 7777);
var msg = parser.parseFileSync('test/samples/adt.hl7');

console.log('************sending message****************');

client.send(msg, function(err, ack) {
  if (err) {
    console.log("ERR: " + err.message);
  } else {
    console.log('ACK Recieved');
    //use log to print to console
    //default segment seperator is \r which does not print nice to console
    //log temporarily overrides the segment seperator to \n
    console.log(ack.log());
  }
})
////////////////////CLIENT///////////////////

