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
		<ItemInputWithLabel className='flex flex-col items-center w-full'>
			<ItemInputLabel className='text-[1.5rem] font-bold tracking-[1px]' htmlFor={name}>
				{label}
			</ItemInputLabel>
			<ItemInputContainer
				className='m-5 rounded-cxl w-[90%] p-[16px_20px] outline-none border-[3px] border-solid bg-grey tracking-[1px] smooth-transition placeholder:text-[#f5f5f5b4] focus:bg-lighter-grey'
				id={name}
				type='text'
				disabled={timerMode}
				name={name}
				{...others}
			/>
		</ItemInputWithLabel>
	);
};

export default ItemInput;
