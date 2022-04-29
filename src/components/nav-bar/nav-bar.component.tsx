import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { selectCurrentUser } from '../../store/user/user.selectors';
import { signOutUser } from '../../store/user/user.action';

import Modal from '../../components/modal/modal.component';
import { ReactComponent as Pomologo } from '../../assets/tomato-svgrepo-com.svg';
import { ReactComponent as GearIcon } from '../../assets/gears-svgrepo-com.svg';
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

	const [openModal, setOpenModal] = useState(false);

	const signOutHandler = () => {
		dispatch(signOutUser());
	};

	const openModalHandler = () => setOpenModal(!openModal);

	return (
		<NavBarContainer className='w-screen p-[20px_26px] flex justify-between items-center'>
			<LogoContainer className='inline-block w-10 h-10 hover:cursor-pointer'>
				<Pomologo onClick={() => navigate('/')} />
			</LogoContainer>
			<LinkContainer className='flex justify-around items-center gap-5'>
				<DisplayNameWrapper className='text-ellipsis md:max-w-[120px]'>
					{user ? user.email : 'Guest'}
				</DisplayNameWrapper>
				<LogoContainer
					onClick={openModalHandler}
					style={{
						width: '25px',
						height: '25px',
						position: 'relative',
					}}
				>
					<GearIcon />
					{openModal && <Modal />}
				</LogoContainer>
				{user ? (
					<LinkWrapper
						className='bg-grey rounded-xl padding-[10px_20px] tracking-[1px] font-bold smooth-transition hover:cursor-pointer hover:bg-lighter-grey'
						onClick={signOutHandler}
						as='span'
					>
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
