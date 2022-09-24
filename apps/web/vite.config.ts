import replace_plugin_ from '@rollup/plugin-replace'
import vercel from 'solid-start-vercel'
import solid_start_ from 'solid-start/vite'
import { defineConfig } from 'vite'
export default defineConfig({
	plugins: [
		replace_plugin_({
			preventAssignment: true,
			'process.env.CONTACT_EMAIL': JSON.stringify(process.env.CONTACT_EMAIL),
			'process.env.ASSET_HOST': JSON.stringify(process.env.ASSET_HOST)
		}),
		solid_start_({
			...(
				process.env.DEPLOY
				? { adapter: vercel() }
				: {}
			)
		})],
	resolve: {
		extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
		alias: {}
	},
	server: {
		hmr: {
			overlay: false
		}
	}
})
