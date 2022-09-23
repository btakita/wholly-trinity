import { copyFileSync, existsSync, readdirSync, readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import commonjs_ from '@rollup/plugin-commonjs'
import node_resolve_ from '@rollup/plugin-node-resolve'
import replace_ from '@rollup/plugin-replace'
import esbuild_ from 'rollup-plugin-esbuild'
import { pick } from '@ctx-core/object'
const dir = dirname(new URL(import.meta.url).pathname)
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
		copyFiles(`${dir}/src/vercel`, `${dir}/.vercel/output`),
	]
}
function copyFiles(from, to, overwrite = false) {
	return {
		name: 'copy-files',
		generateBundle() {
			const log = msg=>console.log('\x1b[36m%s\x1b[0m', msg)
			log(`copy files: ${from} → ${to}`)
			readdirSync(from).forEach(file=>{
				const fromFile = `${from}/${file}`
				const toFile = `${to}/${file}`
				if (existsSync(toFile) && !overwrite)
					return
				log(`• ${fromFile} → ${toFile}`)
				copyFileSync(
					resolve(fromFile),
					resolve(toFile)
				)
			})
		}
	}
}
