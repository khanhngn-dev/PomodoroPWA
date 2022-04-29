import { ChangeEvent, MouseEvent, useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectListItems } from '../../store/list/list.selectors';
import { ListItem } from '../../store/list/list.reducer';

import {
	removeItemFromListAsync,
	setCompleteItemAsync,
	toggleDetailed,
} from '../../store/list/list.actions';
import { checkItem, toggleItem } from '../../utils/reducer/list.utils/list.utils';

import FilterToggle from '../filter-toggle/filter-toggle.component';

import Task from '../task/task.component';
import {
	TaskListContainer,
	EmptyTaskListPlaceHolder,
	FilterContainer,
	TaskListWrapper,
} from './task-list.styles';

const TaskList = memo(() => {
	const dispatch = useDispatch();
	const listItems = useSelector(selectListItems);

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
	}, [listItems]); // eslint-disable-line

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
					label='All'
					type='radio'
					name='filter'
					value='All'
					onChange={onFilter}
					defaultChecked={true}
				/>
				<FilterToggle
					label='Checked'
					type='radio'
					name='filter'
					value='Checked'
					onChange={onFilter}
				/>
				<FilterToggle
					label='Unchecked'
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
				<EmptyTaskListPlaceHolder>
					{filter !== 'All' ? 'Change filter modes' : 'Add some task'}
				</EmptyTaskListPlaceHolder>
			)}
		</TaskListContainer>
	);
});

export default TaskList;
