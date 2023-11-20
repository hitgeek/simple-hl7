function formatName(name) {
	var lastName = name.split('^')[0];
	var firstName = name.split('^')[1];
	var middleName = name.split('^')[2] != undefined ? name.split('^')[2] : '';

	if (middleName) {
		return firstName + ' ' + middleName + ' ' + lastName;
	}

	return firstName + ' ' + lastName;
}

module.exports = formatName;
