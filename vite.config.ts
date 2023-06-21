import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/', //todo, url to hosted app
	resolve: {
		alias: {
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
			'@utils': resolve(__dirname, './src/utils'),
		},
	},
})
