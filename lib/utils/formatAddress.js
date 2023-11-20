function formatAddress(address) {
	var street = address.split('^')[0];
	var apt = address.split('^')[1];
	var city = address.split('^')[2];
	var state = address.split('^')[3];
	var zip = address.split('^')[4];
	return street + ' ' + apt + ' ' + city + ', ' + state + ' ' + zip;
}

module.exports = formatAddress;
