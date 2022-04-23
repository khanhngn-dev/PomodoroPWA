import { FC, ButtonHTMLAttributes, memo } from 'react';
import { BaseButton, FilterButton, FormButton } from './button.styles';

type ButtonProps = {
	buttonType?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = memo(({ children, buttonType, ...others }) => {
	switch (buttonType) {
		case 'filter':
			return <FilterButton {...others}>{children}</FilterButton>;
		case 'submit':
			return <FormButton {...others}>{children}</FormButton>;
		default:
			return <BaseButton {...others}>{children}</BaseButton>;
	}
});

export default Button;
