var hl7 = require('../lib');

var adt = 'MSH|^~\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|ADT^A04|1817457|D|2.5|' + '\r' +
'PID||0493575^^^2^ID 1|454721||DOE^JOHN^^^^|DOE^JOHN^^^^|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086|' + '\r' +
'NK1|1|ROE^MARIE^^^^|SPO||(216)123-4567||EC|||||||||||||||||||||||||||'  + '\r' +
'NK1|2|ROE^JOHN^^^^|SPO||(216)123-1234||EC|||||||||||||||||||||||||||'  + '\r' +
'PV1||O|168 ~219~C~PMA^^^^^^^^^||||277^ALLEN MYLASTNAME^BONNIE^^^^|||||||||| ||20200101&20210101|||||||||||||||||||||||||199912271408||||||002376853`'

var parser = new hl7.Parser();
var inspector = new hl7.Inspector();
var msg = parser.parse(adt);

var obj = inspector.inspect(msg);

obj.segments[1].fields.forEach(function(x) {
    console.log(x);   
})


