import { GlobalStyle, Singleton_ } from '@ctx-core/ui-solid'
import { ParentProps, splitProps } from 'solid-js'
import type { JSX } from 'solid-js/types/jsx'
export default function Home() {
	return [
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
			<section class="content">
				<P>
					We are being called to return to our ancestral and magical land of Egypt! Stargate Events
					presents Wholly Trinity, a gathering that will unite all our multidimensional selves into oneness,
					weaving together the past, present and future.
				</P>
				<P>
					We are the gatekeepers of this galaxy that are here to protect this beautiful planet. Through the
					quantum vortex we will have access to time and space in the quantum field so that we may
					rewrite, reform, and encode future timelines.
				</P>
				<div class="grid grid-cols-5" style="height: 200px;">
					<div class="grid grid-cols-2">
						<Div_bg src="/resort.2.jpg"></Div_bg>
						<Div_bg src="/resort.3.jpg"></Div_bg>
					</div>
					<Div_bg src="/resort.4.jpg"></Div_bg>
					<Div_bg src="/resort.5.jpg"></Div_bg>
					<Div_bg src="/resort.6.jpg"></Div_bg>
					<Div_bg src="/resort.7.jpg"></Div_bg>
				</div>
				<P>
					This unique 8-day experience will start off on 11/8 in the city of Al Hayah (near Hurghada) at the Arena Resort for
					three days. This area of Egypt is considered a high end destination. This gathering kicks off
					synchronistically on a total lunar eclipse. On day one we will celebrate the moon, on day two we
					will celebrate the earth, and on day 3 we will celebrate the sun; which are all connected to the
					pyramids of Giza.
				</P>
				<div class="grid grid-cols-3">
				</div>
				<P>
					Experience 3 magical days at Arena Resort which is located on the Red Sea filled with high
					vibrational workshops, healers, music and celebration! We will not only have access to the
					beach but the resort features many large pools that are filled with aquarian age water. Choose
					from different packages that feature newly built condos and villas, and even mansions. There
					will be delicious Mediterranean and Lebanese dining options with a Lebanese chef that can fit
					all dietary needs.
				</P>
				<P>
					Then on 11/11 we are heading to Cairo, Egypt to visit the pyramids of Giza and venture inside
					the Sphinx where the magic of the halls of Amanti has been found. They are considered the
					Akashic records, where you can access the past, present and future. It is also called the hall of
					mirrors, which is the great dream of illusion. It is time for all the magical beings that are meant to
					be there to break these illusions by opening up the veil of Isis and receive the downloads. Yay!  While in Cairo we will also visit Old Cairo and the Egyptian Museum.
				</P>
				<P>
					Day 5: Sacred Saqqara Complex.
					While at Saqqara we will first visit the Museum of Imhotep, who is considered the world's earliest recorded polymath, and the father of medicine.  We will next visit The Step Pyramdid of Djoser (designed by Imhotep).  From there we will sojourn into one of ancient Kemet's greatest mysteries, the Seraphim of Saqqara.  This collection of giant ancient tombs, too large to fit through carved rock entrance has been the source for rumors of gods and aliens.  We will finished Saqqara by visiting two more smaller tombs on the complex.  After Saqqara we travel to Luxor which is the most amazing historical city*!* It is
					said that 30% of the Ancient sites on the planet are in Luxor (once known as the city of Thebes, and was also
					called the city of Waset to the ancients).  This is where the story of Moses traveling down the Nile as a baby took place.
				</P>
				<P>
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
				</P>
				<P>
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
				</P>
				<P>
					Day 8: We leave Luxor to travel about an hour away to the city of Qena.
					While there we will see two gorgeously preserved temples Dendera Temple Of Het- Heru (Hathor), and Abydos.
					We will then complete the cycle of our journey by returning to the Hurghada area where we will fly home to integrate our cosmic upgrades.
					If you’re reading this you are meant to be here! Different packages are available to those who wish to experience different parts of this magical experience.
				</P>
			</section>
    </main>,
		<Style/>
	]
}
function P($p:ParentProps) {
	return <p class="mt-6">{$p.children}</p>
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
h1,h2,p {
	color: white;
}
`}</GlobalStyle>)
