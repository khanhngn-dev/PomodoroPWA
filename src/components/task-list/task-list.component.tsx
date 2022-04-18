import { ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectListItems } from '../../store/list/list.selectors';

import { selectTimerMode } from '../../store/timer/timer.selectors';
import { removeItemFromList, setCompleteItem } from '../../store/list/list.actions';
import { checkItem, deleteItem } from '../../utils/reducer/list.utils/list.utils';

import Task from '../task/task.component';
import { TaskListContainer, EmptyTaskListPlaceHolder } from './task-list.styles';

const TaskList = () => {
	const dispatch = useDispatch();

	const listItems = useSelector(selectListItems);
	const timerMode = useSelector(selectTimerMode);

	const onCheckedHandler = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		dispatch(setCompleteItem(checkItem(listItems, index)));
	};

	const onDeleteHandler = (event: MouseEvent<HTMLSpanElement>, index: number) => {
		dispatch(removeItemFromList(deleteItem(listItems, index)));
	};

	return (
		<TaskListContainer>
			{listItems.length ? (
				listItems.map((item, index) => (
					<Task
						key={index}
						{...item}
						index={index}
						onChecked={onCheckedHandler}
						onDelete={onDeleteHandler}
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
