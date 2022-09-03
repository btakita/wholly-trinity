import commonjs_ from '@rollup/plugin-commonjs'
import node_resolve_ from '@rollup/plugin-node-resolve'
import replace_ from '@rollup/plugin-replace'
import copy_ from 'rollup-plugin-copy'
import esbuild_ from 'rollup-plugin-esbuild'
export default {
	input: './src/api/index.ts',
	output: {
		file: './.vercel/output/functions/api.func/index.js'
	},
	plugins: [replace_({
		preventAssignment: true,
		values: {}
	}), esbuild_(), commonjs_(), node_resolve_(), copy_({
		targets: [
			{ src: './src/vercel/config.json', dest: './.vercel/output/' },
			{ src: './src/vercel/functions/config.json', dest: './.vercel/output/functions/' },
			{ src: './src/vercel/functions/api.func/.vc-config.json', dest: './.vercel/output/functions/api.func/' },
		]
	})]
}
