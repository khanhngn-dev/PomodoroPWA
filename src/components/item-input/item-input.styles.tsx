import styled from 'styled-components';

export const ItemInputContainer = styled.input`
	/* margin: 20px;
	border-radius: 20px;
	padding: 16px 20px;
	outline: none;
	border: 3px solid  ${(props) => props.theme.primary};
	width: 90%;
	background-color: var(--color-grey);
	letter-spacing: 1px;
	transition: 0.25s ease all; */
	color: ${(props) => props.theme.text};
	border-color: ${(props) => props.theme.primary};
	/* &::placeholder {
		color: #f5f5f5b4;
	} */
	&:focus {
		/* background-color: var(--color-lighter-grey); */
		border-color: ${(props) => props.theme.secondary};
	}
`;

export const ItemInputLabel = styled.label`
	/* font-size: 1.5rem;
	font-weight: bold;
	letter-spacing: 1px; */
	color: ${(props) => props.theme.text};
`;

export const ItemInputWithLabel = styled.div`
	/* display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%; */
`;
