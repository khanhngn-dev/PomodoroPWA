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
	letter-spacing: 1px;
	&:focus {
		border-color: var(--color-primary);
	}
`;

export const ItemInputLabel = styled.label`
	font-size: 1.5rem;
	font-weight: bold;
	color: var(--color-primary);
	letter-spacing: 1px;
`;

export const ItemInputWithLabel = styled.div`
	background-color: var(--color-grey);
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-radius: 20px;
	margin-bottom: 20px;
`;
