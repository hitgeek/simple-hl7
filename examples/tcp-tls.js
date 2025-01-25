var hl7 = require('../lib');

// openssl genrsa -out ../test/test-key.pem 1024
// openssl req -new -key ../test/test-key.pem -out csr.pem -subj '/CN=test.localhost/O=Test/C=XX'
// openssl x509 -req -in csr.pem -signkey ../test/test-key.pem -out ../test/test-cert.pem
// rm csr.pem

////////////////////SERVER///////////////////
var app = hl7.tcp();
app.use(function(req, res, next) {
  console.log('Message Recieved From ' + req.facility);
  console.log('Message Event: ' + req.event);
  console.log('Message Type: ' + req.type);
  next();
});

app.start(7778,undefined,{key:'../test/test-key.pem',cert:'../test/test-cert.pem'});
console.log('TLS tcp interface listening on ' + 7778);
////////////////////SERVER///////////////////

