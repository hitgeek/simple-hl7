function formatDob(dob) {
	var year = dob.substring(0, 4);
	var month = dob.substring(4, 6);
	var day = dob.substring(6, 8);
	return year + '-' + month + '-' + day;
}

module.exports = formatDob;
