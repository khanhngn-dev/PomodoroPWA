import { FC, FormHTMLAttributes, FormEventHandler, useState, ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToList } from '../../store/list/list.actions';
import { selectTimerMode } from '../../store/timer/timer.selectors';

import ItemInput from '../item-input/item-input.component';
import Button from '../button/button.component';
import { FormContainer, InputContainer } from './item-form.styles';

const defaultFormField: { taskName: string; description: string } = {
	taskName: '',
	description: '',
};

const ItemForm: FC<FormHTMLAttributes<HTMLFormElement>> = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormField);
	const timerMode = useSelector(selectTimerMode);
	const { taskName, description } = formFields;

	const clearInput = () => setFormFields(defaultFormField);

	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		dispatch(
			addItemToList({
				taskName,
				complete: false,
				completedAt: 'Not Complete',
				description,
			})
		);
		clearInput();
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<FormContainer onSubmit={handleSubmit}>
			<InputContainer>
				<ItemInput
					required
					name='taskName'
					label={`Add a task name`}
					value={taskName}
					onChange={handleChange}
					placeholder='Complete Pomodoro...'
					maxLength={30}
				/>
				<ItemInput
					required
					name='description'
					label={`Add some descriptions`}
					value={description}
					onChange={handleChange}
					placeholder='Add more features...'
					maxLength={100}
				/>
			</InputContainer>
			<Button timerMode={timerMode} style={{ width: '500px' }}>
				Add Task
			</Button>
		</FormContainer>
	);
};
export default ItemForm;
