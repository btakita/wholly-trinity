import { compact } from '@ctx-core/array'
import { be_, type Ctx } from '@ctx-core/object'
import { query_str_ } from '@ctx-core/uri'
import type {
	api__cmd_T,
	api_POST__payload_T,
	append__payload_T,
	google__credentials_T,
	google__error__payload_T
} from '@wholly-trinity/types'
import { importPKCS8, type SignJWT } from 'jose'
import { Astro__request_ } from '../astro'
export async function api_POST__payload__new(ctx:Ctx):Promise<api_POST__payload_T> {
	const request = Astro__request_(ctx)
	const api__cmd = await (request as Request).json() as api__cmd_T
	await contact__set__handle(ctx, api__cmd)
	await ping__handle(ctx)
	return api_POST__payload_(ctx)
}
async function contact__set__handle(ctx:Ctx, req__payload:api__cmd_T):Promise<api_POST__payload_T> {
	const payload = api_POST__payload_(ctx)
	const contact__set = req__payload.contact__set
	if (!contact__set) return
	const { email, phone } = contact__set
	if (!email && !phone) {
		payload.contact__set = { status: 400, code: 'MISSING_EMAIL_PHONE', message: 'Include email or phone' }
	}
	try {
		const access_token = await access_token_()
		const append__payload:append__payload_T = await fetch(`${sheets__url}/values/A1:append${query_str_({
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
		const error__google__error__payload = append__payload as google__error__payload_T
		if (error__google__error__payload.error) {
			console.error(error__google__error__payload.error)
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
	async function access_token_() {
		const { private_key, client_email, token_uri }:google__credentials_T = JSON.parse(process.env.GOOGLE_CREDENTIALS)
		const grant_type = 'urn:ietf:params:oauth:grant-type:jwt-bearer'
		let scope = 'https://www.googleapis.com/auth/spreadsheets'
		const aud = 'https://www.googleapis.com/oauth2/v4/token'
		const iat = Math.floor(new Date().getTime() / 1000)
		const keylike = await importPKCS8(private_key, 'RS256')
		const assertion = await new SignJWT({
			iss: client_email,
			scope,
			aud,
			exp: iat + 3600,
			iat,
			sub: null
		})
			.setProtectedHeader({ alg: 'RS256' })
			.sign(keylike)
		const payload = await fetch(token_uri, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: query_str_({
				grant_type,
				assertion,
				iss: client_email,
				sub: null,
				scope: scope,
				keyFile: null,
				key: private_key,
			}, '')
		}).then($=>$.json())
		return payload.access_token
	}
}
async function ping__handle(ctx:Ctx) {
	/** @type {api_POST__payload_T} */
	const payload = api_POST__payload_(ctx)
	if (!Object.keys(payload).length) {
		payload.ping = { status: 200, code: 'OK', message: 'Ping' }
	}
}
const api_POST__payload_ = be_(
	'api_POST__payload_', ()=>(
		{}) as api_POST__payload_T)
