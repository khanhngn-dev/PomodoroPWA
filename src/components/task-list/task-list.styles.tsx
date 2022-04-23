import styled from 'styled-components';

export const TaskListContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-grey);
	border-radius: 20px;
	margin: 20px;
	padding-bottom: 20px;
	max-height: 650px;
	width: 90%;
	max-width: 500px;
	color: ${(props) => props.theme.text};
	/* border: 3px solid var(--color-primary); */
`;

export const TaskListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	overflow: auto;
	width: 100%;
	> div {
		background-color: ${(props) => props.theme.background};
	}
`;

export const EmptyTaskListPlaceHolder = styled.div`
	margin: auto;
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
`;

export const FilterContainer = styled.div`
	background-color: var(--color-grey);
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	width: 92%;
	margin: 20px auto;
`;
