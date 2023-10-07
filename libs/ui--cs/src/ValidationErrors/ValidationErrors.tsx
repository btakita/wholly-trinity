import { compact, flatten } from '@ctx-core/array'
import { has_dom } from '@ctx-core/dom'
import { createEffect, createMemo, For, Show, type VoidProps } from 'solid-js'
export function ValidationErrors($p:VoidProps<{
	alwaysShowErrors?:boolean
	error_a?:string[]
	error_a__set?:($:string[])=>void
	focus?:boolean
	show?:boolean
	show__set?:(show:boolean)=>void
}>) {
	const error_a_ = createMemo(()=>compact(flatten($p.error_a || [])))
	createEffect(()=>$p.error_a__set?.(error_a_()))
	const show_ = createMemo<boolean>(()=>
		!!error_a_().length && !!($p.alwaysShowErrors || (has_dom && $p.focus)))
	createEffect(()=>$p.show__set?.(show_()))
	return (
		<Show when={show_()}>
			<For each={error_a_()}>{$=>
				<div class="font-bold text-red-700">{$}</div>
			}</For>
		</Show>
	)
}
