const formatName = require('../utils/formatName');

function parseNk1(segment, config) {
	// name
	var nameField = segment.getField(config.nk1.name_segment);

	// phone
	var homePhoneField = segment.getField(config.nk1.home_phone_segment);

	// cell phone
	var cellPhoneField = segment.getField(config.nk1.cell_phone_segment);

	return {
		name: formatName(nameField),
		homePhone: homePhoneField,
		cellPhone: cellPhoneField,
	};
}

module.exports = parseNk1;
