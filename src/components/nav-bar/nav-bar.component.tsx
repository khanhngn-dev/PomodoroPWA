import { ReactComponent as Pomologo } from '../../assets/tomato-svgrepo-com.svg';
import { LogoContainer, NavBarContainer } from './nav-bar.styles';

const NavBar = () => {
	return (
		<NavBarContainer>
			<LogoContainer>
				<Pomologo />
			</LogoContainer>
			
		</NavBarContainer>
	);
};

export default NavBar;
