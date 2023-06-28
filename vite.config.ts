import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/', //todo, url to hosted app
	resolve: {
		alias: {
			'@/assets': resolve(__dirname, './src/assets'),
			'@/components': resolve(__dirname, './src/components'),
			'@/utils': resolve(__dirname, './src/utils'),
			'@/types': resolve(__dirname, './src/types'),
		},
	},
})
