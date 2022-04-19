import { ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectListItems } from '../../store/list/list.selectors';

import { selectTimerMode } from '../../store/timer/timer.selectors';
import {
	removeItemFromListAsync,
	setCompleteItemAsync,
	toggleDetailed,
} from '../../store/list/list.actions';
import { checkItem, deleteItem, toggleItem } from '../../utils/reducer/list.utils/list.utils';

import Task from '../task/task.component';
import { TaskListContainer, EmptyTaskListPlaceHolder } from './task-list.styles';

const TaskList = () => {
	const dispatch = useDispatch();

	const listItems = useSelector(selectListItems);
	const timerMode = useSelector(selectTimerMode);

	const onCheckedHandler = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		dispatch(setCompleteItemAsync(checkItem(listItems, index)));
	};

	const onDeleteHandler = (event: MouseEvent<HTMLSpanElement>, index: number) => {
		event.stopPropagation();
		dispatch(removeItemFromListAsync(deleteItem(listItems, index)));
	};

	const onOpenHandler = (event: MouseEvent<HTMLDivElement>, index: number) => {
		dispatch(toggleDetailed(toggleItem(listItems, index)));
	};

	return (
		<TaskListContainer>
			{listItems?.length ? (
				listItems.map((item, index) => (
					<Task
						key={index}
						index={index}
						onChecked={onCheckedHandler}
						onDelete={onDeleteHandler}
						onOpen={onOpenHandler}
						{...item}
					/>
				))
			) : (
				<EmptyTaskListPlaceHolder className={`${timerMode ? 'break' : 'work'}`}>
					Add some tasks
				</EmptyTaskListPlaceHolder>
			)}
		</TaskListContainer>
	);
};

export default TaskList;
