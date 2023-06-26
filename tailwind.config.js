/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				xs: ['12px', '15px'],
				sm: ['14px', '17px'],
				base: ['16px', '19px'],
				lg: ['18px', '22px'],
				xl: ['20px', '24px'],
			},
		},
		colors: {
			black: '#000',
			white: '#fff',
			transparent: 'transparent',
			dark: '#0D062D',
			gray: {
				200: '#F5F5F5',
				300: '#DBDBDB',
				400: '#E0E0E0',
				700: '#787486',
				800: '#625F6D',
			},
			red: {
				100: '#F4D7DA',
				500: '#D8727D',
				600: '#D25B68',
			},
			green: {
				300: '#8BC48A',
				400: '#83C29D',
				500: '#68B266',
			},
			violet: '#5030E5',
			pink: '#E4CCFD',
			lime: '#7AC555',
			orange: {
				DEFAULT: '#FFA500',
				300: '#DFA874',
				500: '#D58D49',
			},
			blue: '#76A5EA',
			yellow: '#FCD64A',
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
}
