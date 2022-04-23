import styled from 'styled-components';

export const DetailContainer = styled.div`
	margin: auto;
	border-radius: 20px;
	border: 2px dashed white;
	width: 98%;
	padding: 20px;
	transition: 0.25s ease all;
	background-color: ${(props) => props.theme.innerBack};
`;

export const TaskContainer = styled.div`
	border-radius: 20px;
	width: 92%;
	min-height: max-content;
	font-size: 1.2rem;
	padding: 10px;
	color: white;
	letter-spacing: 1px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	transition: 0.25s ease all;
`;

export const TaskSummary = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-weight: bold;
	min-height: 80px;
	width: 100%;
	&:hover {
		cursor: pointer;
	}
	/* border: 3px solid var(--color-secondary); */
`;

export const TaskNameContainer = styled.span`
	flex: 3;
	text-align: center;
	word-wrap: break-word;
	width: 200px;
	@media (max-width: 768px) {
		width: 120px;
	}
`;

export const TaskDateContainer = styled.span`
	flex: 2;
	text-align: center;
`;

export const DeleteTaskContainer = styled.span`
	margin: 10px;
	display: flex;
	align-items: center;
	transition: 0.25s ease all;
	flex-shrink: 0;
	&:hover {
		color: darkred;
		cursor: pointer;
	}
`;

export const CheckBoxContainer = styled.input`
	margin: 20px;
	width: 9px;
	height: 9px;
	position: relative;
	flex-shrink: 0;
	&:hover {
		cursor: pointer;
		&::before {
			background-color: #c7c7c7;
		}
	}
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200%;
		height: 200%;
		border-radius: 50%;
		background-color: white;
		border: 3px solid white;
		transition: 0.25s ease all;
	}
	&:checked {
		&:hover::before {
			background-color: ${(props) => props.theme.invertBack};
		}
		&::before {
			background-color: ${(props) => props.theme.invert};
		}
	}
`;
