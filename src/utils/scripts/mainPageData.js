/* main page data */
const tag = 'main-page-'
export const onMenuItemClickMain = tag + '1'
export const onOpenMenuMobile = tag + '2'
export const onCloseMenuMobile = tag + '3'
export const listMenuMain = [
	{
		key: 0,
		menu: 'Sponsor',
		'scroll': 'scrollToSponsorScreenMain',
	},
	{
		key: 1,
		menu: 'Sambutan',
		'scroll': 'scrollToWelcomeSpeechScreenMain',
	},
	{
		key: 2,
		menu: 'Tentang',
		'scroll': 'scrollToAboutScreenMain',
	},
	{
		key: 3,
		menu: 'Universitas',
		'scroll': 'scrollToUniversitiesScreenMain',
	},
	{
		key: 4,
		menu: 'Kontak',
		'scroll': 'scrollToContactScreenMain',
	},
]
