import { compact } from '@ctx-core/array'
import { be_ } from '@ctx-core/object'
import { query_str_ } from '@ctx-core/uri'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { google } = require('googleapis')
const { GoogleSpreadsheet } = require('google-spreadsheet')
/** @typedef {import('@ctx-core/object').Ctx} Ctx */
/** @typedef {import('@vercel/node').VercelRequest} VercelRequest */
/** @typedef {import('@vercel/node').VercelResponse} VercelResponse */
/** @typedef {import('@wholly-trinity/types')} $T */
/** @typedef {import('googleapis').sheets_v4} sheets_v4 */
export async function handler(/** @type {VercelRequest} */req, /** @type {VercelResponse} */res) {
	const ctx = ctx_()
	const payload = await payload_(ctx)
	res.send(JSON.stringify(payload))
}
export async function payload_(/** @type {Ctx} */ctx, /** @type {VercelRequest|Request} */req) {
	payload__(ctx).$ = {}
	await contact__set__handle(ctx, req)
	await ping__handle(ctx)
	return payload__(ctx).$
}
async function contact__set__handle(/** @type {Ctx} */ctx, /** @type {VercelRequest|Request} */req) {
	/** @type {$T.payload_T} */
	const payload = payload__(ctx).$
	const req__payload = req.json ? await req.json() : req.body
	/** @type {$T.api__cmd_T} */
	const contact__set = req__payload.contact__set
	if (!contact__set) return
	const { email, phone } = contact__set
	if (!email && !phone) {
		payload.contact__set = { status: 400, code: 'MISSING_EMAIL_PHONE', message: 'Include email or phone' }
	}
	try {
		const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
		const sheets__url = `https://content-sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}`
		await doc.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_CREDENTIALS))
		/** @type {$T.google__credentials_T} */
		const google__credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS)
		const jwt = new google.auth.JWT({
			email: google__credentials.client_email,
			key: google__credentials.private_key,
			scopes: 'https://www.googleapis.com/auth/spreadsheets',
			subject: null
		})
		const access_token = await jwt.authorize().then($=>$.access_token)
		/** @type {$T.append__payload_T} */
		const append__payload = await fetch(`${sheets__url}/values/A1:append${query_str_({
			responseDateTimeRenderOption: 'SERIAL_NUMBER',
			includeValuesInResponse: true,
			insertDataOption: 'INSERT_ROWS',
			responseValueRenderOption: 'FORMATTED_VALUE',
			valueInputOption: 'USER_ENTERED'
		})}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ values: [[email, phone, new Date().toUTCString()]] })
		}).then($=>$.json())
		console.debug('debug|1')
		console.debug(JSON.stringify(append__payload, null, 2))
		if (append__payload.error) {
			console.error(append__payload.error)
			payload.contact__set = { status: 200, code: 'APPEND_ERROR', message: 'Error writing contact' }
			return payload
		}
		payload.contact__set = {
			status: 200, code: 'OK', message: `${compact([
				email ? 'Email' : null,
				phone ? 'Phone' : null
			]).join(' & ')} saved`
		}
	} catch (err) {
		console.error(err)
		payload.contact__set = { status: 500, code: 'INTERNAL_ERROR', message: 'Internal Error' }
		return payload
	}
	return payload
}
async function ping__handle(/** @type {Ctx} */ctx) {
	/** @type {payload_T} */
	const payload = payload__(ctx).$
	if (!Object.keys(payload).length) {
		payload.ping = { status: 200, code: 'OK', message: 'Ping' }
	}
}
const payload__ = be_('payload__', ()=>(/** @type {payload_T} */{}))
