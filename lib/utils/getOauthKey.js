var axios = require('axios');

var CURRENT_OAUTH_KEY = '';
var CURRENT_OAUTH_KEY_EXPIRES = 0;

function getOauthKey() {
	var currentTime = Math.floor(Date.now() / 1000);

	// Return existing token if it's still valid
	if (CURRENT_OAUTH_KEY && currentTime < CURRENT_OAUTH_KEY_EXPIRES) {
		return Promise.resolve({access_token: CURRENT_OAUTH_KEY});
	}

	return axios({
		method: 'post',
		url: process.env.API_BASE_URL + '/oauth/token',
		headers: {
			'Content-Type': 'text/plain',
		},
		data:
			'grant_type=client_credentials&client_id=' +
			process.env.CLIENT_ID +
			'&client_secret=' +
			process.env.CLIENT_SECRET +
			'&scope=client+docs',
	})
		.then(function (response) {
			// Update the token and expiry time
			CURRENT_OAUTH_KEY = response.data.access_token;
			// Assuming the token expires in 3600 seconds (1 hour) - adjust as per actual expiry time
			CURRENT_OAUTH_KEY_EXPIRES = currentTime + 3600;
			return CURRENT_OAUTH_KEY;
		})
		.catch(function (error) {
			console.log(error);
		});
}

module.exports = getOauthKey;
