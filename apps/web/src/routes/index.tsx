import { useMemo } from '@ctx-core/solid-nanostores'
import { GlobalStyle, use_Context_ctx } from '@ctx-core/ui-solid'
import { email_error_a_, Modal__contact__set__showing__, phone_error_a_ } from '@wholly-trinity/domain'
import { notyf__init, notyf_success } from '@wholly-trinity/notyf'
import type { payload_T } from '@wholly-trinity/types'
import { ValidationErrors } from '@wholly-trinity/ui'
import {
	createEffect,
	createMemo,
	createSignal,
	type JSX,
	onCleanup,
	onMount,
	type ParentProps,
	Show,
	type VoidProps
} from 'solid-js'
import { Assets } from 'solid-js/web'
import { Head, Meta, Title } from 'solid-start'
import { Singleton_ } from '~/components/index.js'
const tickets_url = 'https://app.promotix.com/events/details/wholly-Trinity-tickets'
const title = 'STARGATE Presents Wholly Trinity Egypt'
const description = 'We are being called to return to our ancestral and magical land of Egypt! Stargate Events presents Wholly Trinity, a gathering that will unite all our multidimensional selves into oneness, weaving together the past, present and future.'
const image = 'https://www.stargateevent.com/wholly-trinity_promo.mp4.jpg'
const url = 'https://www.stargate.com'
const contact_email = process.env.CONTACT_EMAIL || 'trinitystargate@gmail.com'
const mailto = 'mailto:trinitystargate@gmail.com'
const ASSET_HOST = process.env.ASSET_HOST
export default function Home() {
	const ctx = use_Context_ctx()
	const [section_top_aa_, section_top_aa__set] = createSignal<[HTMLElement, top_T][]>([])
	const [Navigation__o_, Navigation__o__set] = createSignal<Navigation__o>()
	const [video_s_, video_s__set] = createSignal<Set<HTMLVideoElement>>(new Set<HTMLVideoElement>())
	const Modal__contact__set__showing_ = useMemo(Modal__contact__set__showing__(ctx))
	onMount(async ()=>{
		notyf__init(ctx)
		window.addEventListener('scroll', Navigation__refresh)
		onCleanup(()=>window.removeEventListener('scroll', Navigation__refresh))
		window.addEventListener('resize', Navigation__refresh)
		onCleanup(()=>window.removeEventListener('resize', Navigation__refresh))
		queueMicrotask(()=>Navigation__refresh())
	})
	return [
		<Head>
			<Title>{title}</Title>
			<Meta name="description" content={description}/>
			<Meta name="twitter:title" content={title}/>
			<Meta name="twitter:description" content={description}/>
			<Meta name="twitter:image" content={image}/>
			<Meta name="twitter:card" content="summary_large_image"/>
			<Meta name="twitter:url" content={url}/>
			<Meta property="og:title" content={title}/>
			<Meta property="og:type" content="website"/>
			<Meta property="og:description" content={description}/>
			<Meta property="og:image" content={image}/>
			<Meta property="og:url" content={url}/>
			<JsonLd/>
		</Head>,
		<Modal__contact__set></Modal__contact__set>,
		<main class="relative z-0 text-center mx-auto text-gray-700 sm:p-4 bg-cover relative"
					style={`background-image: url(${ASSET_HOST}/hero.webp);`}
		>
			<Navigation_arrows/>
			<article class="relative">
				<Section_intro/>
				<Section_arena_resort/>
				<Section_cairo/>
				<Section_luxor/>
				{/*<Section_contact/>*/}
			</article>
			<Footer></Footer>
    </main>,
		<Style/>
	]
	function JsonLd() {
		// See https://xoocode.com/json-ld-code-examples/event/
		return <Assets><script $ServerOnly type="application/ld+json" innerHTML={JSON.stringify({
			'@context': 'http://schema.org',
			'@type': 'Event',
			name: title,
			alternateName: 'Wholly Trinity',
			url: 'https://stargateevent.com',
			description,
			image,
			location: {
				'@id': 'https://stargateevent.com#hurghada',
				'@type': 'Place',
				name: 'Hurghada, Red Sea Governorate, Egypt',
				url: 'https://egypt.travel/en/regions/the-red-sea/hurghada-city/',
				address: 'Hurghada, Red Sea Governorate, Egypt'
			},
			organizer: {
				'@type': 'Organization',
				name: 'Kabartsy Inc.',
				url: 'https://kabartsy.com/'
			},
			offers: {
				'@id': 'https://stargateevent.com#wholly-Trinity-tickets',
				name: 'Wholly Trinity Event & Accommodations',
				availability: 'In Stock',
				price: '2750',
				priceCurrency: 'USD',
				validFrom: '2022-08-08',
				url: 'https://app.promotix.com/events/details/wholly-Trinity-tickets'
			},
			startDate: '2022-11-08',
			endDate: '2022-11-15',
			whollyTrinityCairo: {
				'@type': 'Event',
				name: 'Wholly Trinity Cairo',
				location: {
					'@id': 'https://stargateevent.com#cairo',
					'@type': 'Place',
					name: 'Cairo, Egypt',
					url: 'https://egypt.travel/en/regions/the-nile/cairo',
					address: 'Cairo, Egypt'
				},
				startDate: '2022-11-11',
				endDate: '2022-11-11'
			},
			whollyTrinityLuxor: {
				'@type': 'Event',
				name: 'Wholly Trinity Luxor',
				location: {
					'@id': 'https://stargateevent.com#luxor',
					'@type': 'Place',
					name: 'Luxor, Egypt',
					url: 'https://egypt.travel/en/regions/the-nile/luxor',
					address: 'Luxor, Egypt'
				},
				startDate: '2022-11-12',
				endDate: '2022-11-15'
			}
		})}/></Assets>
	}
	function Div_tickets($p:ParentProps<{ class?:string }>) {
		return (
			<div class={`flex justify-center ${$p.class || ''}`}>
				<Tickets/>
			</div>
		)
	}
	function Tickets() {
		return (
			<div class="text-center">
				<a href="."
					 class="btn select-none no-underline inline-block"
					 style="color: #1b0f23;"
					 onClick={$=>{
						 $.preventDefault()
						 Modal__contact__set__showing__(ctx).$ = true
					 }}
				>Get your Ticket(s)</a>
				<p class="text-xs">Payment plan available</p>
				<p class="text-xs">
					All round trip & shuttle transportation within Egypt are included.
					At the palm beach hotel & Cairo, food is not included.
				</p>
				<p class="text-xs">
					<img src={`${ASSET_HOST}/plane.svg`} alt="Flight by Travelteck Mari Segerian"
							 class="inline-block mr-1" style="max-height: 16px;"
					/>
					Flight by Travelteck Mari Segerian: <a href="tel:+18185499669" class="underline">818 549 9669</a>.<br/>
					Flights are around $850 as of now 8/30th.
					Best price anywhere.
					It will go up closer we get.
				</p>
				<p class="text-xs underline"><EmailUs/></p>
			</div>
		)
	}
	function Navigation__refresh() {
		const section_top_aa = section_top_aa_()
		let prev__idx = -1, next__idx = -1
		let prev__url:string = null, next__url:string = null
		const { scrollY, screen: { availHeight } } = window
		for (let idx = 0; idx < section_top_aa.length; idx++) {
			const [section, top] = section_top_aa[idx]
			if ((top + availHeight / 2) < scrollY) {
				prev__idx = idx
				prev__url = `#${section.id}`
			}
			if (top >= (scrollY + 1)) {
				next__idx = ~prev__idx ? idx : idx + 1
				const next__id = section_top_aa[next__idx]?.[0]?.id
				next__url = next__id ? `#${next__id}` : null
				if (~next__idx) break
			}
		}
		Navigation__o__set({ prev__idx, next__idx, prev__url, next__url })
	}
	function Navigation_arrows($p:{ class?:string }) {
		const prev__idx_ = createMemo(()=>Navigation__o_()?.prev__idx)
		const prev__id_ = createMemo(()=>Navigation__o_()?.prev__url)
		const next__idx_ = createMemo(()=>Navigation__o_()?.next__idx)
		const next__id_ = createMemo(()=>Navigation__o_()?.next__url)
		return [
			<Show when={prev__id_()}>
				<a href={prev__id_()}
					 onClick={$=>{
						 $.preventDefault()
						 window.scroll(0, section_top_aa_()[prev__idx_()]?.[1])
					 }}
					 class={`fixed z-30 bottom-12 md:bottom-24 right-6 md:right-12 stroke-white fill-amber-100 ${$p.class || ''}`}
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
									clip-rule="evenodd"/>
					</svg>
				</a>
		</Show>,
			<Show when={next__id_()}>
				<a href={next__id_()}
					 onClick={$=>{
						 $.preventDefault()
						 window.scroll(0, section_top_aa_()[next__idx_()]?.[1])
					 }}
					 class={`fixed z-30 bottom-6 md:bottom-12 right-6 md:right-12 stroke-white fill-amber-100 ${$p.class || ''}`}
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
									clip-rule="evenodd"/>
					</svg>
				</a>
			</Show>
		]
	}
	function Section_intro() {
		return (
			<Section id="intro">
				<div class="max-w-full xl:max-w-1/2 min-w-full xl:min-w-1/2 w-full xl:w-1/2 aspect-video static left-0 top-0">
					<Video poster={`${ASSET_HOST}/wholly-trinity_promo.mp4.1200x670.jpg`}
								 class="w-full aspect-video"
								 controls
								 autoplay={true}
								 muted={true}
					>
						<source src={`${ASSET_HOST}/wholly-trinity_promo.mp4`} type="video/mp4"/>
						Loading???
					</Video>
					{' '}
				</div>
				<div class="relative z-20 pt-6 pb-12 px-4 sm:px-12 min-h-screen">
					<h1 class="text-4xl">STARGATE Presents Wholly Trinity Egypt</h1>
					<h2 class="text-2xl">Lunar Eclipse | 11/11 | Portal</h2>
					<h2 class="text-2xl">11/8???11/11 2022</h2>
					<p class="mt-12">{description}
					</p>
					<p class="mt-12">
						We are the gatekeepers of this galaxy that are here to protect this beautiful planet. Through the
						quantum vortex we will have access to time and space in the quantum field so that we may
						rewrite, reform, and encode future timelines.
					</p>
					<Div_tickets class="mt-6"/>
					<img src={`${ASSET_HOST}/pyramids.1200x813.webp`}
							 class="m-auto flex flex-wrap mt-6"
							 alt="Wholly Trinity Pyramids"
					/>
				</div>
			</Section>
		)
	}
	function Section_arena_resort() {
		return (
			<Section id="arena_resort">
				<div role="presentation" class="absolute z-10 bg-cover h-full w-full opacity-40"
						 style={`background-image: url(${ASSET_HOST}/bg.1.webp);`}></div>
				<div class="relative z-20 pt-6 pb-12 px-4 sm:px-12 min-h-screen">
					<h3 class="text-2xl mb-6">Arena Resort</h3>
					<div class="overflow-hidden">
						<img src={`${ASSET_HOST}/resort.03.294x440.webp`}
								 class="w-full mb-6 sm:w-auto sm:ml-12 sm:float-right sm:mb-0"
								 width="294px" height="440px"
								 alt="Wholly Trinity Arena Resort Pool"
						/>
						<p class="mb-6 text-left">
							This unique 8-day experience will start off on 11/8 in the city of Al Hayah (near Hurghada) at the Arena Resort for
							three days. This area of Egypt is considered a high end destination.
						</p>
						<div class="m-auto flex flex-wrap">
							<img src={`${ASSET_HOST}/resort.04.451x300.webp`}
									 class="m-auto"
									 width="451px" height="300px"
									 alt="Wholly Trinity Arena Resort Pool Event"/>
							<img src={`${ASSET_HOST}/resort.07.400x300.webp`}
									 class="m-auto mt-6 sm:mt-0"
									 width="400px" height="300px"
									 alt="Wholly Trinity Arena Resort Gold Sky"
							/>
						</div>
						<p class="mt-6 mb-6 text-left">
							This gathering kicks off synchronistically on a total lunar eclipse.
							On day one we will celebrate the moon, on day two we will celebrate the earth, and on day 3 we will celebrate the sun;
							which are all connected to the pyramids of Giza.
						</p>
					</div>
					<Video class="mx-auto w-full xl:w-1/2 sm:static left-0 top-0"
								 poster={`${ASSET_HOST}/resort.02.mp4.webp`}
								 controls
					>
						<source src={`${ASSET_HOST}/resort.02.mp4`} type="video/mp4"/>
					</Video>
					<div class="overflow-hidden mt-6">
						<p class="mb-6 text-left">
							Experience 3 magical days at Arena Resort which is located on the Red Sea filled with high vibrational workshops, healers, music and celebration!
							We will not only have access to the beach but the resort features many large pools that are filled with aquarian age water.
						</p>
						<p class="mt-6 text-left">
							Choose from different packages that feature newly built condos and villas, and even mansions.
							There will be delicious Mediterranean and Lebanese dining options with a Lebanese chef that can fit all dietary needs.
						</p>
					</div>
					<Div_tickets class="mt-6"/>
				</div>
			</Section>
		)
	}
	function Section_cairo() {
		return (
			<Section id="cairo">
				<div role="presentation"
						 class="absolute z-10 bg-cover h-full w-full opacity-40"
						 style={`background-image: url(${ASSET_HOST}/bg.2.webp);`}></div>
				<div class="relative z-20 pt-6 pb-12 px-4 sm:px-12 min-h-screen">
					<h3 class="text-2xl mb-6">Cairo</h3>
					<p class="mt-6 mb-6 text-left">
						Then on 11/11 we are heading to Cairo, Egypt to visit the pyramids of Giza and venture inside
						the Sphinx where the magic of the halls of Amanti has been found. They are considered the
						Akashic records, where you can access the past, present and future. It is also called the hall of
						mirrors, which is the great dream of illusion. It is time for all the magical beings that are meant to
						be there to break these illusions by opening up the veil of Isis and receive the downloads. Yay!  While in Cairo we will also visit Old Cairo and the Egyptian Museum.
					</p>
					<Video class="mx-auto w-full xl:w-1/2 sm:static left-0 top-0"
								 poster={`${ASSET_HOST}/cairo.1.mp4.1200x675.webp`}
								 controls
					>
						<source src={`${ASSET_HOST}/cairo.1.mp4`} type="video/mp4"/>
					</Video>
					<Div_tickets class="mt-6"/>
				</div>
			</Section>
		)
	}
	function Section_luxor() {
		return (
			<Section id="luxor">
				<div role="presentation"
						 class="absolute z-10 bg-cover h-full w-full opacity-40"
						 style={`background-image: url(${ASSET_HOST}/bg.3.webp);`}></div>
				<div class="relative z-20 pt-6 pb-12 px-4 sm:px-12 min-h-screen">
					<h3 class="text-2xl mb-6">Luxor</h3>
					<div class="m-auto flex flex-wrap mt-6 sm:mt-0 mb-6">
						<img src={`${ASSET_HOST}/luxor.17.169x300.webp`}
								 class="m-auto sm:mt-0"
								 width="169px"
								 height="300px"
								 alt="Wholly Trinity Luxor Karnak 17"
						/>
						<img src={`${ASSET_HOST}/luxor.18.169x300.webp`}
								 class="m-auto mt-6 sm:mt-0"
								 width="169px"
								 height="300px"
								 alt="Wholly Trinity Luxor Karnak 18"
						/>
						<img src={`${ASSET_HOST}/luxor.15.533x300.webp`}
								 class="m-auto mt-6 sm:mt-0"
								 width="533px"
								 height="300px"
								 alt="Wholly Trinity Luxor Karnak 15"
						/>
						<img src={`${ASSET_HOST}/luxor.16.533x300.webp`}
								 class="m-auto mt-6 sm:mt-0"
								 width="533px"
								 height="300px"
								 alt="Wholly Trinity Luxor Karnak 16"
						/>
					</div>
					<Video class="mx-auto w-full sm:static mt-6 max-w-7xl"
								 poster={`${ASSET_HOST}/luxor.09.mp4.1200x675.webp`}
								 controls
					>
						<source src={`${ASSET_HOST}/luxor.09.mp4`} type="video/mp4"/>
					</Video>
					<p class="mt-6 text-left overflow-hidden">
						Day 5: Sacred Saqqara Complex.
						While at Saqqara we will first visit the Museum of Imhotep, who is considered the world's earliest recorded polymath, and the father of medicine.  We will next visit The Step Pyramdid of Djoser (designed by Imhotep).  From there we will sojourn into one of ancient Kemet's greatest mysteries, the Seraphim of Saqqara.  This collection of giant ancient tombs, too large to fit through carved rock entrance has been the source for rumors of gods and aliens.  We will finished Saqqara by visiting two more smaller tombs on the complex.  After Saqqara we travel to Luxor which is the most amazing historical city*!* It is
						said that 30% of the Ancient sites on the planet are in Luxor (once known as the city of Thebes, and was also
						called the city of Waset to the ancients).  This is where the story of Moses traveling down the Nile as a baby took place.
					</p>
					<Video class="mx-auto w-full sm:static mt-6 max-w-7xl"
								 poster={`${ASSET_HOST}/luxor.10.mp4.1200x675.webp`}
								 controls
					>
						<source src={`${ASSET_HOST}/luxor.10.mp4`} type="video/mp4"/>
					</Video>
					<p class="mt-6 text-left">
						Day 6: While in Luxor we experience the magic of the New Kingdom.
						Our first stop will be historic Karnak Temple, the largest open aired museum in the world.
						Karnak was the holiest temple in Kemet.
						Every ruler for over a 1000 years felt it their duty to add to this holy site.
						It later became one of the first places of worship for early Christians and Muslims.
						Our next stop will be historic Luxor Temple.
						A grand spectacle that was worshiped at by rulers ranging from Ramses to Cleopatra.
						The final temple we visit this day will be the Temple of Hatshepsut.
						Hatshepsut was the longest reigning, and most successful female ruler in Egypian history.
						Her gorgeous tempe sits high upon a mountain, with magnificent views of West Luxor.
						We will close the evening with traditional Egyptian music, horse dancing, and an exhibition of an ancient Egyptian martial art performed as a dance.
					</p>
					<div class="m-auto flex flex-wrap mt-6 mb-6">
						<img src={`${ASSET_HOST}/luxor.13.533x300.webp`}
								 class="m-auto"
								 width="533px"
								 height="300px"
								 alt="Wholly Trinity Luxor 13"
						/>
						<img src={`${ASSET_HOST}/luxor.14.400x300.webp`}
								 class="m-auto mt-6 sm:mt-0"
								 height="300px"
								 width="400px"
								 alt="Wholly Trinity Luxor 14"
						/>
						<img src={`${ASSET_HOST}/luxor.02.533x300.webp`}
								 class="m-auto mt-6 sm:mt-0"
								 width="533px" height="300px"
								 alt="Wholly Trinity Luxor 2"
						/>
					</div>
					<Video class="mx-auto w-full sm:static mt-6 max-w-7xl"
								 poster={`${ASSET_HOST}/luxor.12.mp4.1200x675.webp`}
								 controls
					>
						<source src={`${ASSET_HOST}/luxor.12.mp4`} type="video/mp4"/>
					</Video>
					<p class="mt-6 text-left">
						Day 7: The Valley of the Kings is the site chosen by the ancient rulers to be their final resting place.
						Rulers like multiple Ramses, Seti, and yes King Tut chose this area for their tombs.
						Our next stop will be the Valley of the Workers.
						Here we will see the remains of the small city occupied by the people who built many of the wonders we will witness.
						We will also see the well preserved tombs of some of the architects and chief builders.
						We will then go to Habu temple.
						Habu was an architect during the reign of Ramses the III.
						He was known for the incredible depth of his hieroglyphics.
						This temple is said to have the world's oldest restroom.
						We will finish our excursions for the day, with a brief stop to view the giant statues of Amenhotep III (father of Akenaten, grandfather of Tutankamun), also known as the Collossi of Memnon.
					</p>
					<div class="m-auto flex flex-wrap mt-6 mb-6">
						<img src={`${ASSET_HOST}/luxor.01.400x300.webp`}
								 class="m-auto"
								 width="400px" height="300px"
								 alt="Wholly Trinity Luxor 1"
						/>
						<img src={`${ASSET_HOST}/luxor.19.533x300.webp`}
								 class="m-auto mt-6 sm:mt-0"
								 width="533px"
								 height="300px"
								 alt="Wholly Trinity Luxor 19"
						/>
						<img src={`${ASSET_HOST}/luxor.20.400x300.webp`}
								 class="m-auto mt-6 sm:mt-0"
								 width="400px"
								 height="300px"
								 alt="Wholly Trinity Luxor 20"
						/>
					</div>
					<Video class="mx-auto w-full sm:static mt-6 max-w-7xl"
								 poster={`${ASSET_HOST}/luxor.11.mp4.1200x675.webp`}
								 controls
					>
						<source src={`${ASSET_HOST}/luxor.11.mp4`} type="video/mp4"/>
					</Video>
					<p class="mt-6 text-left">
						Day 8: We leave Luxor to travel about an hour away to the city of Qena.
						While there we will see two gorgeously preserved temples Dendera Temple Of Het- Heru (Hathor), and Abydos.
						We will then complete the cycle of our journey by returning to the Hurghada area where we will fly home to integrate our cosmic upgrades.
						If you???re reading this you are meant to be here! Different packages are available to those who wish to experience different parts of this magical experience.
					</p>
					<Div_tickets class="mt-6"/>
				</div>
			</Section>
		)
	}
	function Section_contact() {
		let name__input:HTMLInputElement
		let honey__input:HTMLInputElement
		let email__input:HTMLInputElement
		let message__textarea:HTMLTextAreaElement
		const [contact__show_, contact__show__set] = createSignal(true)
		return (
			<Section id="contact" class="flex flex-col items-center pt-6">
				<Show when={contact__show_()} fallback={
					<p class="color: white;">Thank you for getting in touch!</p>
				}>
					<h2 class="text-2xl mb-4">Get in touch</h2>
					<form
						action={`https://formsubmit.co/${contact_email}`}
						method="post"
						onSubmit={async $=>{
							$.preventDefault()
							await fetch(`https://formsubmit.co/${contact_email}`, {
								method: 'POST',
								headers: {
									Accept: 'application/json',
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									name: name__input.value,
									email: email__input.value,
									message: message__textarea.value,
									honey: honey__input.value,
								})
							})
							contact__show__set(false)
						}}
						class="flex flex-col items-center justify-center"
						style="width: 48rem;"
					>
						<input ref={$=>honey__input = $} type="text" name="_honey" style="display:none"/>
						<div class="flex">
							<div class="flex w-96 pr-1">
								<input ref={$=>name__input = $} type="text"
											 name="_name" placeholder="Your Name" required={true}
											 class="block py-2 px-6 mt-2 w-full"
								/>
							</div>
							<div class="flex w-96 pl-1">
								<input ref={$=>email__input = $} type="text"
											 name="_email" placeholder="Your Email Address" required={true}
											 class="block py-2 px-6 mt-2 w-full"
								/>
							</div>
						</div>
						<textarea ref={$=>message__textarea = $}
											name="_message" placeholder="Your Message" required={true}
											class="block pt-2 pb-2 px-6 mt-2 w-full h-48"
						/>
						<button type="submit"
										class="block py-2 px-6 mt-2 w-full bg-gray-200 hover:bg-gray-300"
						>Send</button>
					</form>
				</Show>
			</Section>
		)
	}
	function Section($p:ParentProps<{ id:string, class?:string }>) {
		return (
			<section
				ref={$=>queueMicrotask(()=>{
					const section_top_aa = section_top_aa_()
					section_top_aa.push([$, $.getBoundingClientRect().top as top_T])
					return section_top_aa__set(section_top_aa)
				})}
				id={$p.id}
				class={`relative ${$p.class || ''}`}
			>{$p.children}</section>
		)
	}
	function Video($p:ParentProps<JSX.VideoHTMLAttributes<HTMLVideoElement>>) {
		return (
			<video
				ref={$=>video_s__set(video_s_().add($))}
				{...$p}
				onPlay={$=>{
					for (const video of video_s_()) {
						if (video !== $.currentTarget && !video.paused) {
							video.pause()
						}
					}
				}}
			>
				{$p.children}
				Loading???
			</video>
		)
	}
	function Footer() {
		return (
			<footer class="p-6 flex flex-col items-center">
				<EmailUs class="mb-6"/>
				<h2 class="text-2xl mb-6">Previous Events</h2>
				<a href="https://bluestargate.com"
					 class="block mb-2 underline"
					 target="_blank"
				>White Star Gate</a>
				<a href="https://web.archive.org/web/20150616145038/http://www.bluestargate.com/"
					 class="block mb-2 underline"
					 target="_blank"
				>Yellow Star Gate</a>
				<a href="https://web.archive.org/web/20150226085038/http://www.bluestargate.com/"
					 class="block mb-2 underline"
					 target="_blank"
				>Blue Star Gate</a>
				<IconscoutAttribution/>
			</footer>
		)
	}
	function Modal__contact__set($p:VoidProps) {
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
			if (Modal__contact__set__showing_()) {
				email__el.focus()
			}
		})
		return (
			<Show when={Modal__contact__set__showing_()}>
				<div
					class="z-30 py-12 bg-amber-900 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
					id="modal"
				><div role="alert" class="z-30 container mx-auto w-11/12 md:w-2/3 max-w-lg">
						<form class="z-30 relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
									onSubmit={$=>{
										$.preventDefault()
										Modal__contact__set__POST().then()
									}}
						>
							<p>Enter your Email or Cell Phone Number so we can stay in touch.</p>
							<p class="text-xs">We will not share your Email or Phone Number with anyone else.</p>
							<div class="relative mb-5 mt-2">
								<div class="absolute right-0 top-2.5 text-gray-600 flex items-start pr-3 h-full cursor-pointer">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
											 stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
									>
										<rect x="3" y="5" width="18" height="14" rx="2"/>
										<polyline points="3 7 12 13 21 7"/>
									</svg>
								</div>
								<input ref={$=>email__el = $}
											 id="email"
											 class="text-gray-600 focus:outline-none focus:border focus:border-yellow-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
											 placeholder="Email Address"
											 onKeyUp={$=>email__set($.currentTarget.value)}
								/>
								<ValidationErrors error_a={_email_error_a_()} alwaysShowErrors={true}></ValidationErrors>
							</div>
							<div class="relative mb-5 mt-2">
								<div class="absolute right-0 top-2.5 text-gray-600 flex items-start pr-3 h-full cursor-pointer">
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle"
											 width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
											 fill="none" stroke-linecap="round" stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
										<rect x="6" y="3" width="12" height="18" rx="2"/>
										<line x1="11" y1="4" x2="13" y2="4"/>
										<line x1="12" y1="17" x2="12" y2="17.01"/>
									</svg>
								</div>
								<input id="phone"
											 class="text-gray-600 focus:outline-none focus:border focus:border-yellow-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
											 placeholder="Cell Phone Number"
											 onKeyUp={$=>phone__set($.currentTarget.value)}
								/>
								<ValidationErrors error_a={_phone_error_a_()} alwaysShowErrors={true}></ValidationErrors>
							</div>
							<div class="flex items-center justify-start w-full">
								<button
									class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-100 transition duration-150 ease-in-out bg-yellow-300 rounded text-black px-8 py-2 text-sm"
									classList={{
										'cursor-default': disabled_(),
										'hover:bg-yellow-400': !disabled_()
									}}
									type="submit"
									disabled={!validation_error_a_() || Modal__contact__set__POST__busy_()}
								>Next Step</button>
							</div>
							<button
								class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
								aria-label="close modal" role="button"
								onClick={()=>Modal__contact__set__showing__(ctx).$ = false}
							>
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20"
										 height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none"
										 stroke-linecap="round" stroke-linejoin="round">
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
				const payload:payload_T = await fetch('/api', {
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
						Modal__contact__set__showing__(ctx).$ = false
					}, 2000)
				} else {
					Modal__contact__set__POST__error__set(contact__set.message)
				}
			} finally {
				Modal__contact__set__POST__busy__set(false)
			}
		}
	}
	function EmailUs($p:VoidProps<{ class?:string }>) {
		return <a class={`underline ${$p.class || ''}`} href={mailto}>Email us for more information</a>
	}
	function IconscoutAttribution() {
		return (
			<span class="inline-block text-xs">
				<a href="https://iconscout.com/icons/aeroplane" target="_blank">Plane Emoji Icon</a>
				{' '}on{' '}<a href="https://iconscout.com">IconScout</a>
			</span>
		)
	}
}
// Language=css
const Style = Singleton_(()=><GlobalStyle>{`
h1,h2,h3,h4,h5,h6,p,a {
	color: white;
}
a {
	text-decoration: underline;
}
`}</GlobalStyle>)
interface Navigation__o {
	prev__url:string|null
	prev__idx:number
	next__url:string|null
	next__idx:number
}
declare const top_sym:unique symbol
export type top_T = number&{ [top_sym]:any }
