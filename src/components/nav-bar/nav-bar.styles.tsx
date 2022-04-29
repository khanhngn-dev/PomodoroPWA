import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.span`
	/* display: inline-block;
	width: 40px;
	height: 40px;
	&:hover {
		cursor: pointer;
	} */
`;

export const NavBarContainer = styled.div`
	/* width: 100vw;
	padding: 20px 26px;
	display: flex;
	justify-content: space-between;
	align-items: center; */
	color: ${(props) => props.theme.text};
`;

export const LinkContainer = styled.div`
	/* display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 20px; */
`;

export const LinkWrapper = styled(Link)`
	/* background-color: var(--color-grey);
	border-radius: 12px;
	padding: 10px 20px;
	letter-spacing: 1px;
	font-weight: bold;
	transition: 0.25s all ease; */
	color: ${(props) => props.theme.text};

	/* &:hover {
		cursor: pointer;
		background-color: var(--color-lighter-grey);
	} */
`;

export const DisplayNameWrapper = styled.span`
	/* text-overflow: ellipsis;
	@media (max-width: 768px) {
		max-width: 120px;
	} */
`;
