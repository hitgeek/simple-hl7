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
  msa.setField(1, 'AR');
  res.ack.addSegment('ERR', err.message);
  res.end();
});


app.start(7777);
console.log('tcp interface listening on ' + 7777);
////////////////////SERVER///////////////////


////////////////////CLIENT///////////////////
var parser = new hl7.Parser({segmentSeperator: '\n'});
var client = hl7.Server.createTcpClient({
  host: 'localhost',
  port: 7777,
  keepalive: true,
  callback: function(err, ack) {
    if (err) {
      console.log("*******ERROR********");
      console.log(err.message);
    } else {
      console.log(ack.log());
    }
  }
});

var msg = parser.parseFileSync('test/samples/adt.hl7');

console.log('************sending 1 message****************');
client.send(msg);

setTimeout(function() {
  console.log('2');
  console.log('************sending 2 message****************');
  client.send(msg);
}, 1000);

setTimeout(function() {
  console.log('************sending 3 message****************');
  client.send(msg);
}, 2000);


setTimeout(function() {
  process.exit();
}, 5000)

////////////////////CLIENT///////////////////

