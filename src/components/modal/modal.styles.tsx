import styled from 'styled-components';

export const ModalContainer = styled.div`
	top: 62px;
	background-color: ${(props) => props.theme.background};
	position: absolute;
	top: 50px;
	left: 50%;
	transform: translateX(-40%);
	display: flex;
	flex-direction: column;
	width: 200px;
	padding: 10px;
	border-radius: 20px;
	grid-gap: 20px;
	z-index: 1;
	> div {
		width: 100%;
	}
`;
