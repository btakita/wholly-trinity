import { GlobalStyle, Singleton_ } from '@ctx-core/ui-solid'
import { type ParentProps, splitProps } from 'solid-js'
import type { JSX } from 'solid-js/types/jsx'
import { Assets } from 'solid-js/web'
export default function Home() {
	return [
		<Head/>,
		<main class="text-center mx-auto text-gray-700 p-4 bg-cover"
					style="background-image: url(/hero.jpg);"
		>
			<video poster="/hero.jpg"
						 class="mx-auto w-full xl:w-1/2"
						 controls
						 autoplay={true}
			>
				<source src="/wholly-trinity_promo.mp4" type="video/mp4"/>
			</video>
			<h1 class="text-4xl">STARGATE Represents Wholly Trinity Egypt</h1>
			<h2 class="text-2xl">Lunar Eclipse / 11-11 / Portal</h2>
			<h2 class="text-2xl">Nov 8—11 2022</h2>
			<article>
				<section class="intro">
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
				</section>
				<section class="arena-resort">
					<h3 class="text-2xl mt-12 mb-6">Arena Resort</h3>
					<div class="overflow-hidden">
						<img src="/resort.3.jpg" class="ml-12 float-right" style="max-height: 440px;"/>
						<p class="mb-6 text-left">
							This unique 8-day experience will start off on 11/8 in the city of Al Hayah (near Hurghada) at the Arena Resort for
							three days. This area of Egypt is considered a high end destination.
						</p>
						<div class="m-auto flex">
							<img src="/resort.4.jpg" class="m-auto" style="max-height: 300px;"/>
							<img src="/resort.5.jpg" class="m-auto" style="max-height: 300px;"/>
						</div>
						<p class="mt-6 text-left">
							This gathering kicks offsynchronistically on a total lunar eclipse.
							On day one we will celebrate the moon, on day two we will celebrate the earth, and on day 3 we will celebrate the sun;
							which are all connected to the pyramids of Giza.
						</p>
					</div>
					<div class="overflow-hidden mt-12">
						<img src="/resort.2.jpg" class="mr-12 float-left" style="max-height: 440px;"/>
						<p class="mb-6 text-left">
							Experience 3 magical days at Arena Resort which is located on the Red Sea filled with high vibrational workshops, healers, music and celebration!
							We will not only have access to the beach but the resort features many large pools that are filled with aquarian age water.
						</p>
						<div class="m-auto flex">
							<img src="/resort.7.jpg" class="m-auto" style="max-height: 300px;"/>
							<img src="/resort.6.jpg" class="m-auto" style="max-height: 300px;"/>
						</div>
						<p class="mt-6 text-left">
							Choose from different packages that feature newly built condos and villas, and even mansions.
							There will be delicious Mediterranean and Lebanese dining options with a Lebanese chef that can fit all dietary needs.
						</p>
					</div>
					{/*<Carousel></Carousel>*/}
				</section>
				<section class="cairo">
					<h3 class="text-2xl mt-12 mb-6">Cairo</h3>
					<p class="mt-12 text-left">
						Then on 11/11 we are heading to Cairo, Egypt to visit the pyramids of Giza and venture inside
						the Sphinx where the magic of the halls of Amanti has been found. They are considered the
						Akashic records, where you can access the past, present and future. It is also called the hall of
						mirrors, which is the great dream of illusion. It is time for all the magical beings that are meant to
						be there to break these illusions by opening up the veil of Isis and receive the downloads. Yay!  While in Cairo we will also visit Old Cairo and the Egyptian Museum.
					</p>
				</section>
				<section class="saqqara">
					<p class="mt-12 text-left">
						Day 5: Sacred Saqqara Complex.
						While at Saqqara we will first visit the Museum of Imhotep, who is considered the world's earliest recorded polymath, and the father of medicine.  We will next visit The Step Pyramdid of Djoser (designed by Imhotep).  From there we will sojourn into one of ancient Kemet's greatest mysteries, the Seraphim of Saqqara.  This collection of giant ancient tombs, too large to fit through carved rock entrance has been the source for rumors of gods and aliens.  We will finished Saqqara by visiting two more smaller tombs on the complex.  After Saqqara we travel to Luxor which is the most amazing historical city*!* It is
						said that 30% of the Ancient sites on the planet are in Luxor (once known as the city of Thebes, and was also
						called the city of Waset to the ancients).  This is where the story of Moses traveling down the Nile as a baby took place.
					</p>
				</section>
				<section class="luxor">
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
				</section>
			</article>
    </main>,
		<Style/>
	]
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
function Carousel() {
	return (
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
	)
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
}
function Video($p:ParentProps<JSX.VideoHTMLAttributes<HTMLVideoElement>>) {
	return <video{...$p}>{$p.children}</video>
}
function Div_bg(_$p:ParentProps<JSX.HTMLAttributes<HTMLDivElement>&{ src:string }>) {
	const [$p, div_props] = splitProps(_$p, ['class', 'src', 'style'])
	return (
		<div class={`bg-contain bg-no-repeat bg-center ${$p.class || ''}`}
				 style={`background-image: url(${$p.src});${$p.style || ''}`}
				 {...div_props}
		></div>
	)
}
const Style = Singleton_(()=><GlobalStyle>{`
h1,h2,h3,h4,h5,h6,p {
	color: white;
}
`}</GlobalStyle>)
