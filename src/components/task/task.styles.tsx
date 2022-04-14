import styled from 'styled-components';

export const TaskNameContainer = styled.span`
	flex: 3;
	text-align: center;
`;

export const TaskContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: var(--color-primary);
	padding: 10px;
	min-height: 80px;
	width: 90%;
	border-radius: 20px;
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 1px;
	/* border: 3px solid var(--color-secondary); */
	&.break {
		background-color: var(--color-accent);
	}
`;

export const TaskDateContainer = styled.span`
	flex: 3;
`;

export const DeleteTaskContainer = styled.span`
	display: flex;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;
