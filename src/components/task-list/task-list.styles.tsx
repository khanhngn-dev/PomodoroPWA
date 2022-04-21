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
	/* border: 3px solid var(--color-primary); */
`;

export const TaskListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	overflow: auto;
	width: 100%;
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
	z-index: 1;
`;

export const FilterToggle = styled.input`
	position: relative;
	width: 30%;
	height: 50px;
	&::before {
		font-size: 1.1rem;
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
		background-color: white;
		&.work {
			color: var(--color-primary);
		}
		&.break {
			color: var(--color-darker-accent);
		}
	}
	&:first-child::before {
		content: 'All';
	}
	&:nth-child(2)::before {
		content: 'Checked';
	}
	&:last-child::before {
		content: 'Unchecked';
	}
	&:checked {
		&.work::before {
			background-color: var(--color-secondary);
			color: white;
		}
		&.break::before {
			background-color: var(--color-accent);
			color: white;
		}
	}
	&:hover {
		cursor: pointer;
		&::before {
			background-color: #d7d7d7;
		}
		&.work::before {
			border-color: var(--color-secondary);
		}
		&.break::before {
			border-color: var(--color-darker-accent);
		}
	}
`;

export const FilterLabel = styled.label``;
