import { FC, InputHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { selectTimerMode } from '../../store/timer/timer.selectors';
import { ItemInputContainer, ItemInputLabel, ItemInputWithLabel } from './item-input.styles';

type ItemInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const ItemInput: FC<ItemInputProps> = ({ label, name, ...others }) => {
	const timerMode = useSelector(selectTimerMode);
	return (
		<ItemInputWithLabel>
			<ItemInputLabel htmlFor={name} className={`${timerMode ? 'break' : 'work'}`}>
				{label}
			</ItemInputLabel>
			<ItemInputContainer
				id={name}
				className={`${timerMode ? 'break' : 'work'}`}
				type='text'
				disabled={timerMode}
				name={name}
				{...others}
			/>
		</ItemInputWithLabel>
	);
};

export default ItemInput;
