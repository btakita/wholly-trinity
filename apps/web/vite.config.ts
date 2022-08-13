import vercel from 'solid-start-vercel'
import solid_start_ from 'solid-start/vite'
import { defineConfig } from 'vite'
import replace_plugin_ from '@rollup/plugin-replace'
export default defineConfig({
	plugins: [
		replace_plugin_({
			preventAssignment: true,
			'process.env.CONTACT_EMAIL': JSON.stringify(process.env.CONTACT_EMAIL),
		}),
		solid_start_({
		...(
			process.env.DEPLOY
			? { adapter: vercel() }
			: {}
		)
	})],
})
