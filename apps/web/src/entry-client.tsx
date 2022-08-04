import { Context_ctx } from '@ctx-core/ui-solid'
import { ctx_ } from '@ctx-core/object'
import { hydrate } from 'solid-js/web'
import { StartClient } from 'solid-start/entry-client'
const ctx = ctx_()
hydrate(()=>(
	<Context_ctx.Provider value={ctx}>
		<StartClient/>
	</Context_ctx.Provider>
), document)
