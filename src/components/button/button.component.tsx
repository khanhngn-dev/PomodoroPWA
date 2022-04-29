import { FC, ButtonHTMLAttributes, memo } from 'react';
import { BaseButton, FormButton } from './button.styles';

type ButtonProps = {
	buttonType?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = memo(({ children, buttonType, ...others }) => {
	switch (buttonType) {
		case 'submit':
			// return <FormButton {...others}>{children}</FormButton>;
			return (
				<FormButton
					className='w-[90%] m-[10px_auto] text-[#fff] p-5 border-none rounded-cxl font-bold text-[1.2rem] tracking-[1.5px] smooth-transition'
					{...others}
				>
					{children}
				</FormButton>
			);
		default:
			// return <BaseButton {...others}>{children}</BaseButton>;
			return (
				<BaseButton
					className='m-5 p-5 w-[166px] rounded-cxl bg-grey font-bold text-[1.2rem] tracking-[1.5px] border-none smooth-transition hover:bg-lighter-grey hover:border-primary'
					{...others}
				>
					{children}
				</BaseButton>
			);
	}
});

export default Button;
