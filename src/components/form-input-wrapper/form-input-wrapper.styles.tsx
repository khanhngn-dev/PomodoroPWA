import styled from 'styled-components';

export const FormInput = styled.input`
	/* margin: 20px 0;
	width: 100%;
	border-radius: 20px;
	padding: 16px 20px;
	color: white;
	outline: none;
	border: 3px solid ${(props) => props.theme.secondary};
	background-color: var(--color-grey);
	letter-spacing: 1px;
	transition: 0.25s ease all; */
	border-color: ${(props) => props.theme.secondary};
	/* &::placeholder {
		color: #f5f5f5b4;
	} */
	&:focus {
		border-color: ${(props) => props.theme.primary};
	}
	&:focus ~ label,
	&:not(:placeholder-shown) ~ label {
		top: -16px;
		transform: scale(1.5);
		border-color: ${(props) => props.theme.primary};
	}
`;

export const FormLabel = styled.label`
	/* position: absolute;
	top: 37px;
	left: 22px;
	transition: 0.25s ease all;
	font-size: 1rem;
	font-weight: bold;
	letter-spacing: 1px;
	transform-origin: left;
	color: white; */
`;

export const FormInputWithLabel = styled.div`
	/* display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 96%; */
`;
