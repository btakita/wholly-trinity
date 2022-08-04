import { type Ctx, ctx_ } from '@ctx-core/object'
import { Context_ctx } from '@ctx-core/ui-solid'
import { createHandler, renderAsync, StartServer, } from 'solid-start/entry-server'
import type { FetchEvent } from 'solid-start/server/types'
export default createHandler(()=>handleRequest)
export async function handleRequest(event:FetchEvent&{ ctx:Ctx }) {
	const ctx = ctx_()
	event.ctx = ctx
	return renderAsync(
		$=><Context_ctx.Provider value={ctx}><StartServer event={$}/></Context_ctx.Provider>
	)()(event)
}
