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
	transition: 0.25s ease all;
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	[type='number'] {
		-moz-appearance: textfield;
	}
	@media (max-width: 768px) {
		margin: 12px;
	}
`;
