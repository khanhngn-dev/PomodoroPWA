import { FC, InputHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { selectTimerMode } from '../../store/timer/timer.selectors';
import { ItemInputContainer, ItemInputLabel, ItemInputWithLabel } from './item-input.styles';

const ItemInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...others }) => {
	const timerMode = useSelector(selectTimerMode);
	return (
		<ItemInputWithLabel>
			<ItemInputLabel className={`${timerMode ? 'break' : 'work'}`}>Add a task name</ItemInputLabel>
			<ItemInputContainer
				className={`${timerMode ? 'break' : 'work'}`}
				type='text'
				name='taskName'
				disabled={timerMode}
				{...others}
			/>
		</ItemInputWithLabel>
	);
};

export default ItemInput;
