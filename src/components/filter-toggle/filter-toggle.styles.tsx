import styled from 'styled-components';

export const FilterToggleWrapper = styled.input`
	/* width: 30%;
	height: 50px; */
	&:hover {
		cursor: pointer;
		&::before {
			background-color: #d7d7d7;
		}
	}
`;

export const FilterLabel = styled.label`
	/* font-size: 1.1rem;
	font-weight: bold;
	position: absolute;
	text-align: center;
	line-height: 50px;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	border: 3px solid white;
	background-color: white; */
	&:hover {
		cursor: pointer;
		background-color: #d7d7d7;
	}
`;

export const FilterWithLabel = styled.div`
	/* position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%; */
	input:checked ~ label {
		color: white;
		background-color: ${(props) => props.theme.secondary};
		&:hover {
			background-color: ${(props) => props.theme.primary};
		}
	}
	label:hover {
		border-color: ${(props) => props.theme.secondary};
	}
`;
