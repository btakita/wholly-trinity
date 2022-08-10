import { GlobalStyle, Singleton_ } from '@ctx-core/ui-solid'
import { createMemo, createSignal, type JSX, onCleanup, onMount, type ParentProps, Show } from 'solid-js'
import { Assets } from 'solid-js/web'
export default function Home() {
	const [section_top_aa_, section_top_aa__set] = createSignal<[HTMLElement, top_T][]>([])
	const [Navigation__o_, Navigation__o__set] = createSignal<Navigation__o>()
	const [video_s_, video_s__set] = createSignal<Set<HTMLVideoElement>>(new Set<HTMLVideoElement>())
	onMount(()=>{
		window.addEventListener('scroll', Navigation__refresh)
		onCleanup(()=>window.removeEventListener('scroll', Navigation__refresh))
		window.addEventListener('resize', Navigation__refresh)
		onCleanup(()=>window.removeEventListener('resize', Navigation__refresh))
		queueMicrotask(()=>Navigation__refresh())
	})
	return [
		<main class="text-center mx-auto text-gray-700 p-4 bg-cover relative"
					style="background-image: url(/hero.jpg);"
		>
			<Navigation_arrows/>
			<article>
				<Section_intro/>
				<Section_arena_resort/>
				<Section_cairo/>
				<Section_luxor/>
			</article>
    </main>,
		<Style/>
	]
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
					 class={`fixed z-30 bottom-12 md:bottom-24 right-6 md:right-12 stroke-white fill-white ${$p.class || ''}`}
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
					 class={`fixed z-30 bottom-6 md:bottom-12 right-6 md:right-12 stroke-white fill-white ${$p.class || ''}`}
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
				<Video poster="/wholly-trinity_promo.mp4.jpg"
							 class="mx-auto w-full xl:w-1/2 static left-0 top-0"
							 controls
							 autoplay={true}
							 muted={true}
				>
					<source src="/wholly-trinity_promo.mp4" type="video/mp4"/>
				</Video>
				<div class="relative z-20 p-12 min-h-screen">
					<h1 class="text-4xl">STARGATE Represents Wholly Trinity Egypt</h1>
					<h2 class="text-2xl">Lunar Eclipse / 11-11 / Portal</h2>
					<h2 class="text-2xl">Nov 8—11 2022</h2>
					<p class="mt-12">
						We are being called to return to our ancestral and magical land of Egypt! Stargate Events
						presents Wholly Trinity, a gathering that will unite all our multidimensional selves into oneness,
						weaving together the past, present and future.
					</p>
					<p class="mt-12">
						We are the gatekeepers of this galaxy that are here to protect this beautiful planet. Through the
						quantum vortex we will have access to time and space in the quantum field so that we may
						rewrite, reform, and encode future timelines.
					</p>
				</div>
			</Section>
		)
	}
	function Section_arena_resort() {
		return (
			<Section id="arena_resort">
				<div role="presentation" class="absolute z-10 bg-cover h-full w-full opacity-40"
						 style="background-image: url(/bg.1.jpg);"></div>
				<div class="relative z-20 p-12 min-h-screen">
					<h3 class="text-2xl mb-6">Arena Resort</h3>
					<div class="overflow-hidden">
						<img src="/resort.3.jpg" class="ml-12 float-right" style="max-height: 440px;"/>
						<p class="mb-6 text-left">
							This unique 8-day experience will start off on 11/8 in the city of Al Hayah (near Hurghada) at the Arena Resort for
							three days. This area of Egypt is considered a high end destination.
						</p>
						<div class="m-auto flex flex-wrap">
							<img src="/resort.4.jpg" class="m-auto" style="max-height: 300px;"/>
							<img src="/resort.5.jpg" class="m-auto" style="max-height: 300px;"/>
						</div>
						<p class="mt-6 text-left">
							This gathering kicks offsynchronistically on a total lunar eclipse.
							On day one we will celebrate the moon, on day two we will celebrate the earth, and on day 3 we will celebrate the sun;
							which are all connected to the pyramids of Giza.
						</p>
					</div>
					<Video class="mx-auto w-full xl:w-1/2 sm:static left-0 top-0"
								 poster="/resort.2.mp4.jpg"
								 controls
					>
						<source src="/resort.2.mp4" type="video/mp4"/>
					</Video>
					<div class="overflow-hidden mt-12">
						<img src="/resort.2.jpg" class="mr-12 float-left" style="max-height: 440px;"/>
						<p class="mb-6 text-left">
							Experience 3 magical days at Arena Resort which is located on the Red Sea filled with high vibrational workshops, healers, music and celebration!
							We will not only have access to the beach but the resort features many large pools that are filled with aquarian age water.
						</p>
						<div class="m-auto flex flex-wrap">
							<img src="/resort.7.jpg" class="m-auto" style="max-height: 300px;"/>
							<img src="/resort.6.jpg" class="m-auto" style="max-height: 300px;"/>
						</div>
						<p class="mt-6 text-left">
							Choose from different packages that feature newly built condos and villas, and even mansions.
							There will be delicious Mediterranean and Lebanese dining options with a Lebanese chef that can fit all dietary needs.
						</p>
					</div>
					{/*<Carousel></Carousel>*/}
				</div>
			</Section>
		)
	}
	function Section_cairo() {
		return (
			<Section id="cairo">
				<div role="presentation" class="absolute z-10 bg-cover h-full w-full opacity-40"
						 style="background-image: url(/bg.2.jpg);"></div>
				<div class="relative z-20 p-12 min-h-screen">
					<h3 class="text-2xl mt-12 mb-6">Cairo</h3>
					<p class="mt-12 text-left">
						Then on 11/11 we are heading to Cairo, Egypt to visit the pyramids of Giza and venture inside
						the Sphinx where the magic of the halls of Amanti has been found. They are considered the
						Akashic records, where you can access the past, present and future. It is also called the hall of
						mirrors, which is the great dream of illusion. It is time for all the magical beings that are meant to
						be there to break these illusions by opening up the veil of Isis and receive the downloads. Yay!  While in Cairo we will also visit Old Cairo and the Egyptian Museum.
					</p>
				</div>
			</Section>
		)
	}
	function Section_luxor() {
		return (
			<Section id="luxor">
				<div role="presentation" class="absolute z-10 bg-cover h-full w-full opacity-40"
						 style="background-image: url(/bg.3.jpg);"></div>
				<div class="relative z-20 p-12 min-h-screen">
					<h3 class="text-2xl mt-12 mb-6">Luxor</h3>
					<Video class="mx-auto w-full xl:w-1/2 absolute sm:static left-0 top-0"
								 poster="/luxor.1.mp4.jpg"
								 controls
					>
						<source src="/luxor.1.mp4" type="video/mp4"/>
					</Video>
					<p class="mt-12 text-left">
						Day 5: Sacred Saqqara Complex.
						While at Saqqara we will first visit the Museum of Imhotep, who is considered the world's earliest recorded polymath, and the father of medicine.  We will next visit The Step Pyramdid of Djoser (designed by Imhotep).  From there we will sojourn into one of ancient Kemet's greatest mysteries, the Seraphim of Saqqara.  This collection of giant ancient tombs, too large to fit through carved rock entrance has been the source for rumors of gods and aliens.  We will finished Saqqara by visiting two more smaller tombs on the complex.  After Saqqara we travel to Luxor which is the most amazing historical city*!* It is
						said that 30% of the Ancient sites on the planet are in Luxor (once known as the city of Thebes, and was also
						called the city of Waset to the ancients).  This is where the story of Moses traveling down the Nile as a baby took place.
					</p>
					<p class="mt-12 text-left">
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
					<p class="mt-12 text-left">
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
					<p class="mt-12 text-left">
						Day 8: We leave Luxor to travel about an hour away to the city of Qena.
						While there we will see two gorgeously preserved temples Dendera Temple Of Het- Heru (Hathor), and Abydos.
						We will then complete the cycle of our journey by returning to the Hurghada area where we will fly home to integrate our cosmic upgrades.
						If you’re reading this you are meant to be here! Different packages are available to those who wish to experience different parts of this magical experience.
					</p>
				</div>
			</Section>
		)
	}
	function Section($p:ParentProps<{ id:string }>) {
		return (
			<section
				ref={$=>queueMicrotask(()=>{
					const section_top_aa = section_top_aa_()
					section_top_aa.push([$, $.getBoundingClientRect().top as top_T])
					return section_top_aa__set(section_top_aa)
				})}
				id={$p.id}
				class="relative"
			>{$p.children}</section>
		)
	}
	function Video($p:ParentProps<JSX.VideoHTMLAttributes<HTMLVideoElement>>) {
		return (
			<video ref={$=>video_s__set(video_s_().add($))}
						 {...$p}
						 onPlay={$=>{
							 for (const video of video_s_()) {
								 if (video !== $.currentTarget && !video.paused) {
									 video.pause()
								 }
							 }
						 }}
			/>
		)
	}
}
function Carousel() {
	return [
		<Head/>,
		<div class="swiffy-slider slider-item-show1">
			<ul class="slider-container">
				<Li>
					<Img src="/resort.3.jpg" class="mr-10"></Img>
					<Img src="/resort.2.jpg" class="ml-10"></Img>
				</Li>
				<Li>
					<Img src="/resort.4.jpg"></Img>
				</Li>
				<Li>
					<Img src="/resort.5.jpg"></Img>
				</Li>
				<Li>
					<Img src="/resort.6.jpg"></Img>
				</Li>
				<Li>
					<Img src="/resort.7.jpg"></Img>
				</Li>
			</ul>
			<button type="button" class="slider-nav"></button>
			<button type="button" class="slider-nav slider-nav-next"></button>
			<div class="slider-indicators">
				<button class="active"></button>
				<button></button>
				<button></button>
				<button></button>
				<button></button>
			</div>
		</div>
	]
	function Li($p:ParentProps) {
		return (
			<li class="flex align-middle justify-center">
				{$p.children}
			</li>
		)
	}
	function Img($p:{ src:string, class?:string, style?:string }) {
		return <img src={$p.src}
								class={$p.class}
								style={`max-width: 100%; max-height: 400px; ${$p.style || ''}`}/>
	}
	function Head() {
		return [
			<Assets>
				<script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/js/swiffy-slider.min.js"
								crossOrigin="anonymous"
								defer={true}
				></script>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/css/swiffy-slider.min.css"
							crossOrigin="anonymous"/>
			</Assets>
		]
	}
}
const Style = Singleton_(()=><GlobalStyle>{`
h1,h2,h3,h4,h5,h6,p {
	color: white;
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
