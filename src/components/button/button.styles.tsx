import styled from 'styled-components';

export const StyledButton = styled.button`
	margin: 20px;
	padding: 20px;
	border-radius: 20px;
	background-color: var(--color-lighter-grey);
	color: var(--color-primary);
	font-weight: bold;
	font-size: 1.2rem;
	width: max-content;
	border: 3px solid var(--color-secondary);
	&:hover {
		background-color: #3b3b3b;
		cursor: pointer;
		border-color: var(--color-primary);
	}
`;
