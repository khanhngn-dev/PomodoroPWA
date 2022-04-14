import { FC, InputHTMLAttributes } from 'react';
import { ItemInputContainer, ItemInputLabel } from './item-input.styles';

const ItemInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...others }) => (
	<>
		<ItemInputLabel>Add a task name</ItemInputLabel>
		<ItemInputContainer type='text' name='taskName' {...others} />
	</>
);

export default ItemInput;
