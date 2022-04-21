import { ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectListItems } from '../../store/list/list.selectors';

import { selectTimerMode } from '../../store/timer/timer.selectors';
import {
	removeItemFromListAsync,
	setCompleteItemAsync,
	toggleDetailed,
} from '../../store/list/list.actions';
import { checkItem, toggleItem } from '../../utils/reducer/list.utils/list.utils';

import Task from '../task/task.component';
import { TaskListContainer, EmptyTaskListPlaceHolder } from './task-list.styles';

const TaskList = () => {
	const dispatch = useDispatch();

	const listItems = useSelector(selectListItems);
	const timerMode = useSelector(selectTimerMode);

	const onCheckedHandler = (event: ChangeEvent<HTMLInputElement>, id: string) => {
		dispatch(setCompleteItemAsync(checkItem(listItems, id), id));
	};

	const onDeleteHandler = (event: MouseEvent<HTMLSpanElement>, id: string) => {
		event.stopPropagation();
		dispatch(removeItemFromListAsync(listItems, id));
	};

	const onOpenHandler = (event: MouseEvent<HTMLDivElement>, id: string) => {
		dispatch(toggleDetailed(toggleItem(listItems, id)));
	};

	return (
		<TaskListContainer>
			{listItems?.length ? (
				listItems.map((item) => (
					<Task
						key={item.id}
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
