import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_memo_tuple4_ } from '@ctx-core/solid-nanostores'
import { Astro_ } from './Astro'
export const [
	Astro__request$_,
	Astro__request_,
	Astro__request__memo,
	Astro__request__memo_,
] = val__be_computed_memo_tuple4_(ctx=>
	nullish__none_([Astro_(ctx)], Astro=>
		Astro.request))