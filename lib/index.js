var hl7 = require('./hl7-server');
var getConfig = require('./utils/getConfig');
var parsePid = require('./parsers/parsePid');
var parseMsh = require('./parsers/parseMsh');
var parseNk1 = require('./parsers/parseNk1');
var locations = require('../config');
var postToApi = require('./utils/postToApi');
require('dotenv').config();

var app = hl7.tcp();

app.use(function (req, res, next) {
	console.log('******message received*****');
	var {sendingFacility} = parseMsh(req.msg.header);
	var config = getConfig(sendingFacility);

	// Validate message type
	if (!config.allowed_message_types.includes(req.type)) {
		console.log('******unsupported message type*****');
		return next();
	}

	// Validate event type
	if (!config.allowed_message_events.includes(req.event)) {
		console.log('******unsupported event type*****');
		return next();
	}

	var pid = parsePid(req.msg.getSegment('PID'), config);
	var nk1 = parseNk1(req.msg.getSegment('NK1'), config);

	postToApi(
		config.practice_id,
		pid.first_name,
		pid.last_name,
		'john.doe@example.com',
		'1980-01-01',
		'555-1234',
		'your_access_token_here',
	)
		.then((response) => {
			console.log('Patient created successfully:', response.data);
		})
		.catch((error) => {
			console.error('Error creating patient:', error);
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
