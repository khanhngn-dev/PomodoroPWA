import styled from 'styled-components';

export const TaskContainer = styled.div`
	border-radius: 20px;
	width: 92%;
	background-color: var(--color-primary);
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
	&.break {
		background-color: var(--color-accent);
		div {
			background-color: darkgreen;
		}
	}
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
	max-width: 200px;
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
	&:hover {
		cursor: pointer;
		&::before {
			background-color: #c7c7c7;
		}
		&.break {
			&:checked::before {
				background-color: darkred;
			}
		}
		/* background-color: #017399; */
		&.work {
			&:checked::before {
				background-color: #007e00;
			}
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
	&.work {
		&:checked::before {
			background-color: var(--color-accent);
		}
		/* background-color: #00a5dc; */
	}
	&.break {
		&:checked::before {
			background-color: var(--color-primary);
		}
	}
`;

export const DetailContainer = styled.div`
	margin: auto;
	border-radius: 20px;
	border: 2px dashed white;
	width: 98%;
	padding: 20px;
	background-color: var(--color-secondary);
	transition: 0.25s ease all;
`;
