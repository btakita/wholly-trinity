import 'notyf/notyf.min.css'
import { notyf_success__backgroundColor__ } from '@ctx-core/notyf'
import { type Ctx } from '@ctx-core/object'
export * from '@ctx-core/notyf'
export function notyf__init(ctx:Ctx) {
	notyf_success__backgroundColor__(ctx).$ = '#10b981'
}
