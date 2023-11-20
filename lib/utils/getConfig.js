var locations = require('../../config');

function getConfig(sendingFacility) {
	var currentLocation = locations.find(function (location) {
		return location.sending_facility === sendingFacility;
	});

	if (!currentLocation) {
		throw new Error('Unknown sending facility');
	}

	return currentLocation;
}

module.exports = getConfig;
