import path from 'path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { name, version } from './package.json'
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es'],
			name,
		},
		outDir: './lib'
	},
	define: {
		pkgJson: { name, version },
	},
	plugins: [solid()],
})
