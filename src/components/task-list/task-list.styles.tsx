import styled from 'styled-components';

export const TaskListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-grey);
	border-radius: 20px;
	margin: 20px;
	padding: 20px 0;
	overflow: auto;
	height: 500px;
	max-height: 500px;
	width: 500px;
	gap: 20px;
	/* border: 3px solid var(--color-primary); */
`;

export const EmptyTaskListPlaceHolder = styled.div`
	margin: auto;
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
`;
