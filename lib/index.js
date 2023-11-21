var hl7 = require('./hl7-server');
var getConfig = require('./utils/getConfig');
var parsePid = require('./parsers/parsePid');
var parseMsh = require('./parsers/parseMsh');
var parseNk1 = require('./parsers/parseNk1');
var locations = require('../config');
var postToApi = require('./utils/postToApi');

var app = hl7.tcp();

app.use(function (req, res, next) {
	console.log('******message received*****');
	var {sendingFacility} = parseMsh(req.msg.header);
	var config = getConfig(sendingFacility);

	var pid = parsePid(req.msg.getSegment('PID'), config);
	var nk1 = parseNk1(req.msg.getSegment('NK1'), config);

	postToApi({
		...pid,
		nextOfKin: {...nk1},
	});

	next();
});

app.use(function (req, res, next) {
	// acks are created automatically
	console.log('******sending ack*****');
	res.end();
});

app.use(function (err, req, res, next) {
	// error handler
	// standard error middleware would be
	console.log('******ERROR*****');
	console.log(err);
	var msa = res.ack.getSegment('MSA');
	msa.setField(1, 'AR');
	res.ack.addSegment('ERR', err.message);
	res.end();
});

// Start up the engine on all configured ports
locations
	.map((c) => c.port)
	.forEach((port) => {
		app.start(port);
		console.log(`Listening on port ${port}`);
	});
