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
		<TaskListContainer className='relative flex flex-col items-center bg-grey rounded-cxl m-5 pb-5 max-h-[650px] w-[90%] max-w-[500px]'>
			<FilterContainer className='flex bg-grey flex-nowrap justify-between items-center w-[92%] m-[20px_auto]'>
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
				<TaskListWrapper className='flex flex-col items-center gap-5 overflow-auto w-full'>
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
				<EmptyTaskListPlaceHolder className='m-auto text-[2rem] font-bold text-center'>
					{filter !== 'All' ? 'Change filter modes' : 'Add some task'}
				</EmptyTaskListPlaceHolder>
			)}
		</TaskListContainer>
	);
});

export default TaskList;
