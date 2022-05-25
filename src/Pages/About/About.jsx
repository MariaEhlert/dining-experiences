import './About.scss'
import { Employee } from './Employee';
export const About = () => {
	return (
		<>
			<section className='employeeWrapper'>
				<h2>Vores ansatte</h2>
				<article >
					<Employee/>
				</article>
			</section>
			<section className='aboutWrapper'>
				<article className='articleOne'>
					<h2>Om os</h2>
					<p>Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst
						siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af
						forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk
						typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt
						afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.</p>
				</article>
			</section>
			<section>
			</section>
		</>
	)
}
