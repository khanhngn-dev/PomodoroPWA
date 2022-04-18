import styled from 'styled-components';

export const ItemInputContainer = styled.input`
	margin: 20px;
	border-radius: 20px;
	padding: 16px 20px;
	color: var(--color-primary);
	outline: none;
	border: 3px solid var(--color-primary);
	width: 90%;
	background-color: var(--color-grey);
	letter-spacing: 1px;
	transition: 0.25s ease all;
	&::placeholder {
		color: #f5f5f5b4;
	}
	&:focus {
		border-color: var(--color-secondary);
		background-color: var(--color-lighter-grey);
	}
	&.break {
		border-color: var(--color-accent);
	}
`;

export const ItemInputLabel = styled.label`
	font-size: 1.5rem;
	font-weight: bold;
	letter-spacing: 1px;
`;

export const ItemInputWithLabel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
