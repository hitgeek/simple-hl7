var hl7 = require('../lib/hl7-server');
var Parser = require('../lib/hl7/parser');

// do not remove this line... it is used to test the server
require('../lib/index');

var client = hl7.Server.createTcpClient('localhost', 7777);

//create a message
var msgString =
	'MSH|^~\\&|DIGNITY_HEALTH|DIGNITY_HEALTH|ReceivingApplication|ReceivingFacility|20231120||ADT^A04|123456|P|2.3|\r' +
	'EVN|A04|20231120|\r' +
	'PID|1||123456789^^^Hospital^MR||Doe^John^A^^^||19800101|M||Caucasian|123 Fake Street^Apt 2^Faketown^NY^12345^USA||(222)222-2222|(111)111-1111|johndoe@email.com|English|Single||123-45-6789||\r' +
	'NK1|1|Doe^Jane^A^^^|Sister|456 Another St^Apt 5^Faketown^NY^12345^USA|(333)333-3333||(444)444-4444|\r' +
	'PV1|1|I|2000^2050^01||||12345^Physician^Primary^^^Dr.^^^Hospital^|||SUR||||Admitting Doctor|||||||||12345678|||||||||||||||||||||||||20231120|';

var parser = new Parser();
var msg = parser.parse(msgString);

client.send(msg, function (err, ack) {
	console.log('******ack received*****');
	console.log(ack);
});
