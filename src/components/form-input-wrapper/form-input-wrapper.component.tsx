import { FC, InputHTMLAttributes } from 'react';
import { FormInput, FormLabel, FormInputWithLabel } from './form-input-wrapper.styles';

type ItemInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInputWrapper: FC<ItemInputProps> = ({ label, name, ...others }) => {
	return (
		<FormInputWithLabel>
			<FormInput id={name} type='text' name={name} {...others} />
			<FormLabel htmlFor={name}>{label}</FormLabel>
		</FormInputWithLabel>
	);
};

export default FormInputWrapper;
