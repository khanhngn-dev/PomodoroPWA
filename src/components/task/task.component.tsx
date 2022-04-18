import { FC, ChangeEvent, memo, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { selectTimerMode } from '../../store/timer/timer.selectors';

import { ReactComponent as CrossSVG } from '../../assets/x-svgrepo-com.svg';
import {
	TaskSummary,
	TaskDateContainer,
	TaskContainer,
	DeleteTaskContainer,
	CheckBoxContainer,
	TaskNameContainer,
	DetailContainer,
} from './task.styles';

export type ListProps = {
	index: number;
	taskName: string;
	complete: boolean;
	completedAt: string;
	description: string;
	onChecked: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
	onDelete: (event: MouseEvent<HTMLSpanElement>, index: number) => void;
};

const Task: FC<ListProps> = memo(
	({ index, taskName, completedAt, complete, description, onChecked, onDelete }) => {
		const timerMode = useSelector(selectTimerMode);

		return (
			<TaskContainer className={`${timerMode ? 'break' : 'work'}`}>
				<TaskSummary>
					<TaskNameContainer>{taskName}</TaskNameContainer>
					<CheckBoxContainer
						className={`${timerMode ? 'break' : 'work'}`}
						type='checkbox'
						checked={complete}
						onChange={(e) => onChecked(e, index)}
					/>
					<TaskDateContainer>{completedAt}</TaskDateContainer>
					<DeleteTaskContainer onClick={(e) => onDelete(e, index)}>
						<CrossSVG />
					</DeleteTaskContainer>
				</TaskSummary>
				<DetailContainer>{description}</DetailContainer>
			</TaskContainer>
		);
	}
);

export default Task;
