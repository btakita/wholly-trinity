import { readFileSync } from 'fs'
import commonjs_ from '@rollup/plugin-commonjs'
import node_resolve_ from '@rollup/plugin-node-resolve'
import replace_ from '@rollup/plugin-replace'
import esbuild_ from 'rollup-plugin-esbuild'
import { pick } from '@ctx-core/object'
const compilerOptions = pick(
	JSON.parse(readFileSync('./tsconfig.json').toString()).compilerOptions,
	'target', 'jsx', 'jsxImportSource')
export default {
	input: './src/api/index.ts',
	output: {
		file: './.vercel/output/functions/api.func/index.js'
	},
	plugins: [
		replace_({ preventAssignment: true, values: {} }),
		esbuild_(compilerOptions),
		commonjs_(),
		node_resolve_({ browser: true }),
	]
}
