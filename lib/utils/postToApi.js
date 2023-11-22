function postToApi(data) {
	console.log('******posting to api*****');
	console.log(data);

	// TODO: replace this with the actual call
	return;

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
