import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import {
	email_error_a_,
	mailto,
	Modal_contact_set__showing$_,
	Modal_contact_set__showing__memo,
	phone_error_a_
} from '@wholly-trinity/domain--cs'
import { notyf_success } from '@wholly-trinity/notyf'
import type { api_POST__payload_T } from '@wholly-trinity/types'
import { createEffect, createMemo, createSignal, Show, type VoidProps } from 'solid-js'
import { ValidationErrors } from '../ValidationErrors'
const tickets_url = 'https://app.promotix.com/events/details/wholly-Trinity-tickets'
export function Modal_contact_set($p:VoidProps<{
	ctx?:Ctx
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	let email__el:HTMLInputElement
	const [email_, email__set] = createSignal('')
	const [phone_, phone__set] = createSignal('')
	const _email_error_a_ = createMemo(()=>email_error_a_(email_()))
	const _phone_error_a_ = createMemo(()=>phone_error_a_(phone_()))
	const validation_error_a_ = createMemo(()=>[
		..._email_error_a_(),
		..._phone_error_a_(),
	])
	const disabled_ = createMemo(()=>!validation_error_a_().length)
	const [Modal__contact__set__POST__error_, Modal__contact__set__POST__error__set] =
		createSignal('')
	const [Modal__contact__set__POST__busy_, Modal__contact__set__POST__busy__set] =
		createSignal(false)
	createEffect(()=>{
		if (Modal_contact_set__showing__memo(ctx)) {
			email__el.focus()
		}
	})
	return (
		<Show when={Modal_contact_set__showing__memo(ctx)}>
			<div
				class="z-30 py-12 bg-amber-900 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
				id="modal"
			>
				<div role="alert" class="z-30 container mx-auto w-11/12 md:w-2/3 max-w-lg">
					<form
						class="z-30 relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
						onSubmit={$=>{
							$.preventDefault()
							Modal__contact__set__POST().then()
						}}
					>
						<p>Enter your Email or Cell Phone Number so we can stay in touch.</p>
						<p class="text-xs">We will not share your Email or Phone Number with anyone else.</p>
						<div class="relative mb-5 mt-2">
							<div class="absolute right-0 top-2.5 text-gray-600 flex items-start pr-3 h-full cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect x="3" y="5" width="18" height="14" rx="2"/>
									<polyline points="3 7 12 13 21 7"/>
								</svg>
							</div>
							<input
								ref={$=>email__el = $}
								id="email"
								class="text-gray-600 focus:outline-none focus:border focus:border-yellow-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
								placeholder="Email Address"
								onKeyUp={$=>
									email__set($.currentTarget.value)}
							/>
							<ValidationErrors error_a={_email_error_a_()} alwaysShowErrors={true}></ValidationErrors>
						</div>
						<div class="relative mb-5 mt-2">
							<div class="absolute right-0 top-2.5 text-gray-600 flex items-start pr-3 h-full cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-info-circle"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
									<rect x="6" y="3" width="12" height="18" rx="2"/>
									<line x1="11" y1="4" x2="13" y2="4"/>
									<line x1="12" y1="17" x2="12" y2="17.01"/>
								</svg>
							</div>
							<input
								id="phone"
								class="text-gray-600 focus:outline-none focus:border focus:border-yellow-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
								placeholder="Cell Phone Number"
								onKeyUp={$=>
									phone__set($.currentTarget.value)}
							/>
							<ValidationErrors error_a={_phone_error_a_()} alwaysShowErrors={true}></ValidationErrors>
						</div>
						<div class="flex items-center justify-start w-full">
							<button
								class={class_(
									'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100 transition duration-150' +
									'ease-in-out bg-yellow-300 rounded text-black px-8 py-2 text-sm',
									{
										'cursor-default': disabled_(),
										'hover:bg-yellow-400': !disabled_()
									}
								)}
								type="submit"
								disabled={!validation_error_a_() || Modal__contact__set__POST__busy_()}
							>Next Step
							</button>
						</div>
						<button
							class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
							aria-label="close modal" role="button"
							onClick={()=>Modal_contact_set__showing$_(ctx).$ = false}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-x"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z"/>
								<line x1="18" y1="6" x2="6" y2="18"/>
								<line x1="6" y1="6" x2="18" y2="18"/>
							</svg>
						</button>
						<Show when={Modal__contact__set__POST__error_()}>
							<div class="text-red-700">
								<p>An error occurred:</p>
								<p>{Modal__contact__set__POST__error_()}</p>
								<p>Please <a href={mailto} class="underline">contact us</a> to book your tickets.</p>
							</div>
						</Show>
					</form>
				</div>
			</div>
		</Show>
	)
	async function Modal__contact__set__POST() {
		Modal__contact__set__POST__busy__set(true)
		try {
			const payload:api_POST__payload_T = await fetch('/api', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					contact__set: {
						email: email_(),
						phone: phone_(),
					}
				})
			}).then($=>$.json())
			const { contact__set } = payload
			if (contact__set.status === 200) {
				await notyf_success(ctx, 'Taking you to the tickets page...')
				setTimeout(()=>{
					window.open(tickets_url, '_blank')
					Modal_contact_set__showing$_(ctx).$ = false
				}, 2000)
			} else {
				Modal__contact__set__POST__error__set(contact__set.message)
			}
		} finally {
			Modal__contact__set__POST__busy__set(false)
		}
	}
}
