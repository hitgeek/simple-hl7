function postToApi(data) {
	var url = '';

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then((response) => response.json());
}

module.exports = postToApi;
