var axios = require('axios');
var getOauthKey = require('./getOauthKey');

function postToApi(practiceId, firstName, lastName, email, dob, phone, accessToken) {
	var url = process.env.API_BASE_URL + '/api/v3/patients';

	var data = {
		practice_id: practiceId,
		first_name: firstName,
		last_name: lastName,
		email: email,
		dob: dob,
		phone: phone,
	};

	getOauthKey().then((accessToken) => {
		var config = {
			headers: {
				Authorization: 'Bearer ' + accessToken,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		};

		return axios.post(url, new URLSearchParams(data).toString(), config);
	});
}

module.exports = postToApi;
