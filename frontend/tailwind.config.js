const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.js',
		'./nuxt.config.js'
	],
	darkMode: false, // or 'media' or 'class'
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray
			},
			spacing: {
				full: '100%',
				'1/2': '50%'
			}
		},
		fontFamily: {
			sans: 'SF UI Display, sans-serif',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
