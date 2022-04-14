import styled from 'styled-components';

export const StyledButton = styled.button`
	margin: 20px;
	padding: 20px;
	border-radius: 20px;
	background-color: var(--color-grey);
	font-weight: bold;
	font-size: 1.2rem;
	width: max-content;
	letter-spacing: 1.5px;
	/* border: 3px solid var(--color-secondary); */
	border: none;
	&:hover {
		background-color: var(--color-lighter-grey);
		cursor: pointer;
		border-color: var(--color-primary);
	}
`;
