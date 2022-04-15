import { FC, InputHTMLAttributes, ChangeEventHandler, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromList, setCompleteItem } from '../../store/list/list.actions';
import { createDate, checkItem, deleteItem } from '../../utils/reducer/list.utils/list.utils';
import { selectListItems } from '../../store/list/list.selectors';
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
} & InputHTMLAttributes<HTMLInputElement>;

const Task: FC<ListProps> = memo(
	({ index, taskName, completedAt, complete, description, ...others }) => {
		const [checked, setChecked] = useState(complete);
		const [completeDate, setCompleteDate] = useState(completedAt);
		const items = useSelector(selectListItems);
		const timerMode = useSelector(selectTimerMode);
		const dispatch = useDispatch();

		const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
			setChecked(!checked);
			!checked ? setCompleteDate(createDate()) : setCompleteDate('Not Complete');
			dispatch(setCompleteItem(checkItem(items, index, event)));
		};

		const onClickHandler = () => dispatch(removeItemFromList(deleteItem(items, index)));

		return (
			<TaskContainer className={`${timerMode ? 'break' : 'work'}`}>
				<TaskSummary>
					<TaskNameContainer>{taskName}</TaskNameContainer>
					<CheckBoxContainer
						className={`${timerMode ? 'break' : 'work'}`}
						type='checkbox'
						checked={checked}
						name={taskName}
						onChange={onChangeHandler}
						{...others}
					/>
					<TaskDateContainer>{completeDate}</TaskDateContainer>
					<DeleteTaskContainer onClick={onClickHandler}>
						<CrossSVG />
					</DeleteTaskContainer>
				</TaskSummary>
				<DetailContainer>{description}</DetailContainer>
			</TaskContainer>
		);
	}
);

export default Task;
