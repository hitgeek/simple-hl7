function parseMsh(segment) {
	var sendingFacility = segment.getField(2);

	return {
		sendingFacility,
	};
}

module.exports = parseMsh;
