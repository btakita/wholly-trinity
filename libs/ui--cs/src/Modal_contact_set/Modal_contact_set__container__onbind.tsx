import { id__dom__handler_ } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import { render } from 'solid-js/web'
import { Modal_contact_set } from './Modal_contact_set'
export const Modal_contact_set__container__onbind = id__dom__handler_(
	'Modal_contact_set__container__onbind',
	(
		Modal_contact_set__container:HTMLDivElement,
		ctx:Ctx
	)=>{
		render(
			()=><Modal_contact_set ctx={ctx}/>,
			Modal_contact_set__container)
	})
