/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				sm: ['14px', '17px'],
				base: ['16px', '19px'],
				xl: ['20px', '24px'],
				xs: ['12px', '15px']
			}
		},
		colors: {
			black: '#000',
			white: '#fff',
			transparent: 'transparent',
			dark: '#0D062D',
			gray: {
				200: '#F5F5F5',
				300: '#DBDBDB',
				700: '#787486'
			},
			red: {
				500: '#D8727D'
			},
			violet: '#5030E5',
			pink: '#E4CCFD',
			lime: '#7AC555',
			orange: '#FFA500',
			blue: '#76A5EA',
			yellow: '#FCD64A'
		}
	},
	plugins: [],
}
