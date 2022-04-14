// import { ChangeEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { selectListItems } from '../../store/list/list.selectors';
import { selectTimerMode } from '../../store/timer/timer.selectors';

import Task from '../task/task.component';
import { TaskListContainer, EmptyTaskListPlaceHolder } from './task-list.styles';

const TaskList = () => {
	const listItems = useSelector(selectListItems);
	const timerMode = useSelector(selectTimerMode);

	return (
		<TaskListContainer>
			{listItems.length ? (
				listItems.map((item, index) => <Task key={index} {...item} index={index} />)
			) : (
				<EmptyTaskListPlaceHolder className={`${timerMode ? 'break' : 'work'}`}>
					Add some tasks
				</EmptyTaskListPlaceHolder>
			)}
		</TaskListContainer>
	);
};

export default TaskList;
