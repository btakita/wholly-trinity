import netlify from 'solid-start-netlify'
import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
export default defineConfig({
	plugins: [solid({
		...(
			process.env.NODE_ENV === 'development'
			? {}
			: { adapter: netlify({ edge: true }) }
		)
	})],
})
