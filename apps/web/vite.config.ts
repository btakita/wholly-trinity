import cloudflare_pages from 'solid-start-cloudflare-pages'
import netlify from 'solid-start-netlify'
import vercel from 'solid-start-vercel'
import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
export default defineConfig({
	plugins: [solid({
		...(
			process.env.DEPLOY
			? { adapter: vercel() }
			: {}
		)
	})],
})
