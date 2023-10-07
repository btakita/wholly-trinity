export function ld_json__new({ title, description, image }:{
	title:string,
	description:string,
	image:string,
}) {
	return JSON.stringify({
		'@context': 'http://schema.org',
		'@type': 'Event',
		name: title,
		alternateName: 'Wholly Trinity',
		url: 'https://stargateevent.com',
		description,
		image,
		location: {
			'@id': 'https://stargateevent.com#hurghada',
			'@type': 'Place',
			name: 'Hurghada, Red Sea Governorate, Egypt',
			url: 'https://egypt.travel/en/regions/the-red-sea/hurghada-city/',
			address: 'Hurghada, Red Sea Governorate, Egypt'
		},
		organizer: {
			'@type': 'Organization',
			name: 'Kabartsy Inc.',
			url: 'https://kabartsy.com/'
		},
		offers: {
			'@id': 'https://stargateevent.com#wholly-Trinity-tickets',
			name: 'Wholly Trinity Event & Accommodations',
			availability: 'In Stock',
			price: '2750',
			priceCurrency: 'USD',
			validFrom: '2022-08-08',
			url: 'https://app.promotix.com/events/details/wholly-Trinity-tickets'
		},
		startDate: '2022-11-08',
		endDate: '2022-11-15',
		whollyTrinityCairo: {
			'@type': 'Event',
			name: 'Wholly Trinity Cairo',
			location: {
				'@id': 'https://stargateevent.com#cairo',
				'@type': 'Place',
				name: 'Cairo, Egypt',
				url: 'https://egypt.travel/en/regions/the-nile/cairo',
				address: 'Cairo, Egypt'
			},
			startDate: '2022-11-11',
			endDate: '2022-11-11'
		},
		whollyTrinityLuxor: {
			'@type': 'Event',
			name: 'Wholly Trinity Luxor',
			location: {
				'@id': 'https://stargateevent.com#luxor',
				'@type': 'Place',
				name: 'Luxor, Egypt',
				url: 'https://egypt.travel/en/regions/the-nile/luxor',
				address: 'Luxor, Egypt'
			},
			startDate: '2022-11-12',
			endDate: '2022-11-15'
		}
	})
}