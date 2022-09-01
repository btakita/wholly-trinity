import { GoogleSpreadsheet } from 'google-spreadsheet'
import { compact } from '@ctx-core/array'
/** @typedef {import('@ctx-core/object').Ctx} Ctx */
/** @typedef {import('@vercel/node').VercelRequest} VercelRequest */
/** @typedef {import('@vercel/node').VercelResponse} VercelResponse */
/** @typedef {import('@wholly-trinity/types').api__cmd_T} api__cmd_T */
/** @typedef {import('@wholly-trinity/types').payload_T} payload_T */
export async function handler(/** @type {VercelRequest} */req, /** @type {VercelResponse} */res) {
	const ctx = ctx_()
	const payload = await payload_(ctx)
	res.send(JSON.stringify(payload))
}
export async function payload_(/** @type {Ctx} */ctx) {
	await contact__set__handle(ctx, req)
	await ping__handle(ctx)
	return payload__(ctx).$
}
async function contact__set__handle(/** @type {Ctx} */ctx, /** @type {VercelRequest|Request} */req) {
	/** @type {payload_T} */
	const payload = payload__(ctx)
	/** @type {api__cmd_T} */
	const contact__set = req.body.contact__set
	if (!contact__set) return
	const { email, phone } = contact__set
	if (!email && !phone) {
		payload.contact__set = { status: 400, code: 'MISSING_EMAIL_PHONE', message: 'Include email or phone' }
	}
	try {
		const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
		await doc.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_CREDENTIALS))
		await doc.loadInfo()
		const sheet = doc.sheetsByIndex[0]
		await sheet.addRow({ email, phone })
	} catch (err) {
		console.error(err)
		payload.contact__set = { status: 500, code: 'INTERNAL_ERROR', message: 'Internal Error' }
		return payload
	}
	payload.contact__set = {
		status: 200, code: 'OK', message: `${compact([
			email ? 'Email' : null,
			phone ? 'Phone' : null
		]).join(' & ')} saved`
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
