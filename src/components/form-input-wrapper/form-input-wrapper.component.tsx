import { FC, InputHTMLAttributes } from 'react';
import { FormInput, FormLabel, FormInputWithLabel } from './form-input-wrapper.styles';

type ItemInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInputWrapper: FC<ItemInputProps> = ({ label, name, ...others }) => {
	return (
		<FormInputWithLabel className='flex flex-col items-center relative w-[96%]'>
			<FormInput
				className='m-[20px_0] w-full rounded-cxl p-[16px_20px] smooth-transition tracking-[1px] bg-grey text-[#fff] outline-none border-[3px] border-solid placeholder:text-[#f5f5f5b4] '
				id={name}
				type='text'
				name={name}
				{...others}
			/>
			<FormLabel
				className='absolute top-[40%] left-[22px] smooth-transition text-[1rem] font-bold tracking-[1px] origin-left text-[#fff]'
				htmlFor={name}
			>
				{label}
			</FormLabel>
		</FormInputWithLabel>
	);
};

export default FormInputWrapper;
