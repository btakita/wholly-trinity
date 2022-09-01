import { type Ctx, ctx_ } from '@ctx-core/object'
import { Context_ctx } from '@ctx-core/ui-solid'
import { payload_ } from '@wholly-trinity/api'
import { Router } from 'itty-router'
import { createHandler, renderAsync, StartServer, } from 'solid-start/entry-server'
import type { FetchEvent } from 'solid-start/server/types'
export default createHandler(()=>handleRequest)
export async function handleRequest(event:FetchEvent&{ ctx:Ctx }) {
	const ctx = ctx_()
	event.ctx = ctx
	return await router_().handle(event.request, event, ()=>
		renderAsync(
			$=><Context_ctx.Provider value={ctx}><StartServer event={$}/></Context_ctx.Provider>
		)()(event))
}
function router_() {
	return (
		Router()
			.post('/api', (request:Request, { ctx }:FetchEvent_w_ctx)=>api__POST(ctx))
			.all('*', (request, { ctx }:FetchEvent_w_ctx, next)=>next())
	)
}
async function api__POST(ctx:Ctx) {
	const payload = await payload_(ctx)
	return new Response(JSON.stringify(payload), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	})
}
interface FetchEvent_w_ctx extends FetchEvent {
	ctx:Ctx
}
