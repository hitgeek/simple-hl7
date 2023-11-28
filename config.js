// Ports should be limited to 7700-7799

module.exports = [
	{
		practice_id: '6282490b-f7e0-40ec-a34d-dac3014453a2',
		port: 7700,
		name: 'Dignity Health',
		sending_facility: 'DIGNITY_HEALTH',
		allowed_message_types: ['ADT'],
		allowed_message_events: ['A02', 'A03', 'A04', 'A05', 'A08'],
		pid: {
			name_segment: 5,
			dob_segment: 7,
			sex_segment: 8,
			address_segment: 11,
			email_segment: 15,
			home_phone_segment: 13,
			cell_phone_segment: 14,
			language_segment: 16,
		},
		nk1: {
			name_segment: 2,
			home_phone_segment: 5,
			cell_phone_segment: 7,
		},
	},
];
