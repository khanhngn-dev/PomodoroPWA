import styled from 'styled-components';

export const DialContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DialDivider = styled.span`
	font-size: 3rem;
	font-weight: bold;
	color: var(--color-primary);
	opacity: 1;
	&.blip {
		animation-name: blip;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
	@keyframes blip {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
