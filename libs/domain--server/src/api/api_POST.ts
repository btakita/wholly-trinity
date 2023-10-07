import { type Ctx } from '@ctx-core/object'
import { api_POST__payload__new } from './api_POST__payload'
const sheets__url = `https://content-sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}`
export async function api_POST(ctx:Ctx) {
	const payload = await api_POST__payload__new(ctx)
	return new Response(JSON.stringify(payload), {
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
