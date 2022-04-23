import { FC, FormHTMLAttributes, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { addItemToListAsync } from '../../store/list/list.actions';

import ItemInput from '../item-input/item-input.component';
import { FormContainer, ItemButton } from './item-form.styles';
import { generateTaskID } from '../../utils/reducer/list.utils/list.utils';

const ItemForm: FC<FormHTMLAttributes<HTMLFormElement>> = memo(() => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			taskName: '',
			description: '',
		},
		onSubmit: (values, { resetForm }) => {
			dispatch(
				addItemToListAsync({
					id: generateTaskID(values.taskName, values.description),
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
			<ItemButton buttonType='submit' type='submit'>
				Add Task
			</ItemButton>
		</FormContainer>
	);
});
export default ItemForm;
