import styled from 'styled-components';

export const DialWrapper = styled.input`
	margin: 20px;
	border: none;
	font-size: 3rem;
	font-weight: bold;
	background-color: var(--color-grey);
	width: 60px;
	height: 80px;
	text-align: center;
	line-height: 80px;
	border-radius: 10px;
	color: var(--color-primary);
	transition: 1s ease all;
	transform-origin: center;
	transform: scale(1);
	opacity: 1;

	&.changing {
		opacity: 0;
		transform: scale(0.75);
	}
`;
