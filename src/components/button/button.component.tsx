import { FC, ButtonHTMLAttributes, memo } from 'react';
import { BaseButton, FormButton } from './button.styles';

type ButtonProps = {
	buttonType?: string;
	timerMode?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = memo(({ children, buttonType, timerMode, ...others }) => {
	switch (buttonType) {
		case 'submit':
			return <FormButton {...others}>{children}</FormButton>;
		default:
			return (
				<BaseButton className={`${timerMode ? 'break' : 'work'}`} {...others}>
					{children}
				</BaseButton>
			);
	}
});

export default Button;
