import { FC, FormHTMLAttributes, FormEventHandler, useState, ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToList } from '../../store/list/list.actions';

import { FormContainer } from './item-form.styles';
import ItemInput from '../item-input/item-input.component';
import Button from '../button/button.component';
import { selectTimerMode } from '../../store/timer/timer.selectors';

const ItemForm: FC<FormHTMLAttributes<HTMLFormElement>> = () => {
	const dispatch = useDispatch();
	const [taskName, setTaskName] = useState('');
	const timerMode = useSelector(selectTimerMode);

	const clearInput = () => setTaskName('');

	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		if (!taskName) {
			alert('Add a task name first');
			return;
		}
		dispatch(
			addItemToList({
				taskName,
				complete: false,
				completedAt: 'Not Complete',
			})
		);
		clearInput();
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setTaskName(event.target.value);
	};
	return (
		<FormContainer onSubmit={handleSubmit}>
			<ItemInput value={taskName} onChange={handleChange} placeholder='Kick Trong Nhan...' />
			<Button timerMode={timerMode} style={{ width: '500px' }}>
				Add Task
			</Button>
		</FormContainer>
	);
};
export default ItemForm;
