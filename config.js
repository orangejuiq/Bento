// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'mae',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'good morning,',
	greetingAfternoon: 'good afternoon,',
	greetingEvening: 'good evening,',
	greetingNight: 'go to sleep,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'Dark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'canvas',
			icon: 'book-copy',
			link: 'https://poway.instructure.com/',
		},
		{
			id: '2',
			name: 'drive',
			icon: 'hard-drive',
			link: 'https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-hero-goto',
		},
		{
			id: '3',
			name: 'calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/u/1/r?pli=1',
		},
		{
			id: '4',
			name: 'gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/1/#inbox',
		},
		{
			id: '5',
			name: 'notes',
			icon: 'notepad-text',
			link: 'https://keep.google.com/u/1/',
		},
		{
			id: '6',
			name: 'grades',
			icon: 'chart-column-increasing',
			link: 'https://sis.powayusd.com/PXP2_Login_Student.aspx?regenerateSessionId=True',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'reddit',
					link: 'https://www.reddit.com/',
				},
				{
					name: 'inaturalist',
					link: 'https://www.inaturalist.org/home',
				},
				{
					name: 'uci',
					link: 'https://shib.service.uci.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s2',
				},
				{
					name: 'dante cert',
					link: 'https://ad8.au.auth0.com/login?state=hKFo2SBCMXB0Z21RRHVZemNzd2ZDZjFJamVoT1ZMOWhId2JuS6FupWxvZ2luo3RpZNkgYVN4Vm1LejZNRUt5cDJHYWIzYVZId09qVlp1bkFEcDKjY2lk2SBzUkxkdDBEd3dQbms4TWlmSFl4aDBLUUhJSDdWN3VVTw&client=sRLdt0DwwPnk8MifHYxh0KQHIH7V7uUO&protocol=samlp&SAMLRequest=fZJta9swFIX%2FitF3v9RJbEckgbRhJCxtvSQtbF%2BGIt%2FUYnrxdKWm%2B%2FdT7A0y6AoCwdU599E93BkyJTu69K7VO%2FjpAV30pqRG2j%2FMibeaGoYCqWYKkDpO98v7Lc2TjHbWOMONJFeWjx0MEawTRpNos5qT78Am47IcVZNjMWbTIz9CWfAqP015PgFW8GKalZBPC1aR6BksBuechEbBjuhho9Ex7UIpyydxNo7z8SEb0XxEs%2BobiVZhGqGZ612tcx3SNGVNlTAfjmuzhBuV9oOmuNs2Lludz7X%2BUd2L0%2FrrW5t9%2FrLerMvn0j89kmj59%2B93RqNXYPdgXwWHp932qrtvLkRIHJOgnVQ4MITqJFxIqTKNl5B0bdeTUxzuPGYc%2B%2Br7LUhU%2F0n7VuggePk46OMgQro%2BHOq4ftwfyGJ24dA%2BOLt4nzJLrzWzYTkeQvfNqjZS8F%2FRJ2MVc%2F%2BH3yQ3fUU08amXUq%2BxAy5OApoQopTmfGchkOfEWQ8kXQzQf5dw8Rs%3D&RelayState=https%3A%2F%2Faudinate.talentlms.com%2Findex%2Fssologin%2Fservice%3Asaml',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'kickass',
					link: 'https://www1.kickassanime.mx/',
				},
				{
					name: 'twitch',
					link: 'https://www.twitch.tv/',
				},
				{
					name: 'peacock',
					link: 'https://www.peacocktv.com/watch/home',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'reddit',
					link: 'https://www.reddit.com/',
				},
				{
					name: 'inaturalist',
					link: 'https://www.inaturalist.org/home',
				},
				{
					name: 'uc',
					link: 'https://apply.universityofcalifornia.edu/my-application/login',
				},
				{
					name: 'csu',
					link: 'https://calstate.liaisoncas.com/applicant-ux/#/login',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'kickass',
					link: 'https://www1.kickassanime.mx/',
				},
				{
					name: 'twitch',
					link: 'https://www.twitch.tv/',
				},
				{
					name: 'peacock',
					link: 'https://www.peacocktv.com/watch/home',
				},
			],
		},
	],
};
