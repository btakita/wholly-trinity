import { atom_ } from '@ctx-core/nanostores'
import { be_atom_memo_tuple5_ } from '@ctx-core/solid-nanostores'
export const [
	Modal_contact_set__showing$_,
	Modal_contact_set__showing_,
	Modal_contact_set__showing__set,
	Modal_contact_set__showing__memo,
	Modal_contact_set__showing__memo_,
] = be_atom_memo_tuple5_(
	'Modal_contact_set__showing', ()=>
		atom_(false))
