import styled from 'styled-components';

export const ItemInputContainer = styled.input`
	margin: 20px;
	border-radius: 20px;
	padding: 10px;
	color: var(--color-primary);
	outline: none;
	border: 3px solid var(--color-secondary);
	width: 60%;
	background-color: var(--color-lighter-grey);
	&:focus {
		border-color: var(--color-primary);
	}
`;

export const ItemInputLabel = styled.label`
	font-size: 1.5rem;
	font-weight: bold;
	color: var(--color-primary);
`;
