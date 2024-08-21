const token =
	'patvyntDRI07sXXWj.fbdd59702af738ab0c5960d118c2a1c8bcd39479923fd40a15faa966a51ee5b5'

export const getRecords = fetch(
	`https://api.airtable.com/v0/appWwIseIzt9aVk0t/Posts`,
	{
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	}
).then((res) => res.json())
