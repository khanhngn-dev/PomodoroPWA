import { FC, InputHTMLAttributes } from 'react';
import { ItemInputContainer, ItemInputLabel, ItemInputWithLabel } from './item-input.styles';

const ItemInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...others }) => (
	<ItemInputWithLabel>
		<ItemInputLabel>Add a task name</ItemInputLabel>
		<ItemInputContainer type='text' name='taskName' {...others} />
	</ItemInputWithLabel>
);

export default ItemInput;
