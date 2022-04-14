import { FC, InputHTMLAttributes, ChangeEventHandler, useState, memo } from 'react';
import {
	TaskNameContainer,
	TaskDateContainer,
	TaskContainer,
	DeleteTaskContainer,
} from './task.styles';
import { ReactComponent as CrossSVG } from '../../assets/x-svgrepo-com.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectListItems } from '../../store/list/list.selectors';
import { removeItemFromList, setCompleteItem } from '../../store/list/list.actions';
import { createDate, checkItem, deleteItem } from '../../utils/reducer/list.utils/list.utils';

export type ListProps = {
	index: number;
	taskName: string;
	complete: boolean;
	completedAt: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Task: FC<ListProps> = memo(({ index, taskName, completedAt, complete, ...others }) => {
	const [checked, setChecked] = useState(complete);
	const [completeDate, setCompleteDate] = useState(completedAt);
	const items = useSelector(selectListItems);
	const dispatch = useDispatch();

	const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
		setChecked(!checked);
		!checked ? setCompleteDate(createDate()) : setCompleteDate('Not Complete');
		dispatch(setCompleteItem(checkItem(items, index, event)));
	};

	const onClickHandler = () => dispatch(removeItemFromList(deleteItem(items, index)));

	return (
		<TaskContainer>
			<TaskNameContainer>{taskName}</TaskNameContainer>
			<input
				style={{ margin: '0 20px' }}
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
		</TaskContainer>
	);
});

export default Task;
