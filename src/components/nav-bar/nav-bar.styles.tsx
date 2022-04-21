import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.span`
	display: inline-block;
	width: 40px;
	height: 40px;
	&:hover {
		cursor: pointer;
	}
`;

export const NavBarContainer = styled.div`
	width: 100vw;
	padding: 20px 26px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LinkContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
`;

export const LinkWrapper = styled(Link)`
	background-color: var(--color-grey);
	border-radius: 12px;
	padding: 10px 20px;
	letter-spacing: 1px;
	font-weight: bold;
	color: var(--color-primary);
	transition: 0.25s all ease;
	&:hover {
		cursor: pointer;
		background-color: var(--color-lighter-grey);
	}
`;

export const DisplayNameWrapper = styled.span`
	color: var(--color-primary);
`;
