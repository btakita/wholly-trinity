import { type APIContext, type AstroGlobal } from 'astro'
import { domain_ctx__new } from '@wholly-trinity/domain--cs/src/ctx'
import { Astro__set } from './Astro'
export function Astro__domain_ctx__new(Astro:APIContext|AstroGlobal) {
	const ctx = domain_ctx__new()
	Astro__set(ctx, Astro)
	return ctx
}
