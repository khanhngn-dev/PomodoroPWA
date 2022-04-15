import { FC, InputHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { selectTimerMode } from '../../store/timer/timer.selectors';
import { ItemInputContainer, ItemInputLabel, ItemInputWithLabel } from './item-input.styles';

type ItemInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const ItemInput: FC<ItemInputProps> = ({ label, ...others }) => {
	const timerMode = useSelector(selectTimerMode);
	return (
		<ItemInputWithLabel>
			<ItemInputLabel className={`${timerMode ? 'break' : 'work'}`}>{label}</ItemInputLabel>
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
