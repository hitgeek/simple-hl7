const formatName = require('../utils/formatName');
const formatDob = require('../utils/formatDob');
const formatAddress = require('../utils/formatAddress');

function parsePid(segment, config) {
	// name
	var nameField = segment.getField(config.pid.name_segment);

	// date of birth
	var dobField = segment.getField(config.pid.dob_segment);

	// sex
	var sexField = segment.getField(config.pid.sex_segment);

	// address
	var addressField = segment.getField(config.pid.address_segment);

	// email
	var emailField = segment.getField(config.pid.email_segment);

	// phone
	var homePhoneField = segment.getField(config.pid.home_phone_segment);

	// cell phone
	var cellPhoneField = segment.getField(config.pid.cell_phone_segment);

	// language
	var languageField = segment.getField(config.pid.language_segment);

	return {
		name: formatName(nameField),
		dob: formatDob(dobField),
		sex: sexField,
		address: formatAddress(addressField),
		email: emailField,
		homePhone: homePhoneField,
		cellPhone: cellPhoneField,
		language: languageField,
	};
}

module.exports = parsePid;
