import { FC, FormHTMLAttributes } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { addItemToList } from '../../store/list/list.actions';
import { selectTimerMode } from '../../store/timer/timer.selectors';

import ItemInput from '../item-input/item-input.component';
import { FormContainer, ItemButton } from './item-form.styles';

const ItemForm: FC<FormHTMLAttributes<HTMLFormElement>> = () => {
	const dispatch = useDispatch();
	const timerMode = useSelector(selectTimerMode);
	const formik = useFormik({
		initialValues: {
			taskName: '',
			description: '',
		},
		onSubmit: (values, { resetForm }) => {
			dispatch(
				addItemToList({
					taskName: values.taskName,
					complete: false,
					completedAt: 'Not Complete',
					description: values.description,
					openDesc: false,
				})
			);
			resetForm();
		},
		onReset: (values) => {
			values.taskName = '';
			values.description = '';
		},
	});

	return (
		<FormContainer onSubmit={formik.handleSubmit}>
			<ItemInput
				required
				name='taskName'
				label={`Add a task name`}
				value={formik.values.taskName}
				onChange={formik.handleChange}
				placeholder='Complete Pomodoro...'
				maxLength={30}
			/>
			<ItemInput
				required
				name='description'
				label={`Add some descriptions`}
				value={formik.values.description}
				onChange={formik.handleChange}
				placeholder='Add more features...'
				maxLength={100}
			/>
			<ItemButton buttonType='submit' type='submit' className={`${timerMode ? 'break' : 'work'}`}>
				Add Task
			</ItemButton>
		</FormContainer>
	);
};
export default ItemForm;
