import { Nav } from "./Nav"
import Logo from '../../Assets/Image/logo.svg'
import './Header.scss'


const navItems = [
	{ name: 'Forside', path: '/' , display: true },
	{ name: 'Om', path: '/about', display: true },
	{ name: 'Restauranter', path: '/restauranter',display: true }, 
]

export const Header = () => {

	return (
		<div>
			<header>
			
                <img src={Logo} alt="logo" />
				<Nav navItems={navItems} />

			</header>
		</div>
	)
}