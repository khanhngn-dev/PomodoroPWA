import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { selectCurrentUser } from '../../store/user/user.selectors';
import { signOutUser } from '../../store/user/user.action';

import { ReactComponent as Pomologo } from '../../assets/tomato-svgrepo-com.svg';
import {
	LogoContainer,
	NavBarContainer,
	LinkContainer,
	LinkWrapper,
	DisplayNameWrapper,
} from './nav-bar.styles';

const NavBar = () => {
	const user = useSelector(selectCurrentUser);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signOutHandler = () => {
		dispatch(signOutUser());
	};

	return (
		<NavBarContainer>
			<LogoContainer>
				<Pomologo onClick={() => navigate('/')} />
			</LogoContainer>
			<LinkContainer>
				<DisplayNameWrapper>{user ? user.email : 'Guest'}</DisplayNameWrapper>
				{user ? (
					<LinkWrapper onClick={signOutHandler} as='span'>
						Sign out
					</LinkWrapper>
				) : (
					<LinkWrapper to='/signin'>Sign in</LinkWrapper>
				)}
			</LinkContainer>
		</NavBarContainer>
	);
};

export default NavBar;
