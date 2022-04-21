import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
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
import {
	TaskListContainer,
	EmptyTaskListPlaceHolder,
	FilterContainer,
	FilterToggle,
	TaskListWrapper,
} from './task-list.styles';
import { ListItem } from '../../store/list/list.reducer';

const TaskList = () => {
	const dispatch = useDispatch();
	const listItems = useSelector(selectListItems);
	const timerMode = useSelector(selectTimerMode);

	const [filteredList, setFilteredList] = useState<ListItem[]>(listItems);
	const [filter, setFilter] = useState('All');

	const filterList = (filter: string, listItems: ListItem[]) => {
		switch (filter) {
			case 'Checked':
				return listItems.filter((item) => item.complete);
			case 'Unchecked':
				return listItems.filter((item) => !item.complete);
			default:
				return listItems;
		}
	};

	const onFilter = (event: ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
		setFilteredList(filterList(event.target.value, listItems));
	};

	useEffect(() => {
		setFilteredList(filterList(filter, listItems));
	}, [listItems]);

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
			<FilterContainer>
				<FilterToggle
					className={`${timerMode ? 'break' : 'work'}`}
					type='radio'
					name='filter'
					value='All'
					onChange={onFilter}
					defaultChecked={true}
				/>
				<FilterToggle
					className={`${timerMode ? 'break' : 'work'}`}
					type='radio'
					name='filter'
					value='Checked'
					onChange={onFilter}
				/>
				<FilterToggle
					className={`${timerMode ? 'break' : 'work'}`}
					type='radio'
					name='filter'
					value='Unchecked'
					onChange={onFilter}
				/>
			</FilterContainer>
			{filteredList?.length ? (
				<TaskListWrapper>
					{filteredList.map((item) => (
						<Task
							key={item.id}
							onChecked={onCheckedHandler}
							onDelete={onDeleteHandler}
							onOpen={onOpenHandler}
							{...item}
						/>
					))}
				</TaskListWrapper>
			) : (
				<EmptyTaskListPlaceHolder className={`${timerMode ? 'break' : 'work'}`}>
					{filter !== 'All' ? 'Change filter modes' : 'Add some task'}
				</EmptyTaskListPlaceHolder>
			)}
		</TaskListContainer>
	);
};

export default TaskList;
