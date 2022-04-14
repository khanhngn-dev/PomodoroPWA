import { FC, ButtonHTMLAttributes, memo } from 'react';
import { StyledButton } from './button.styles';

type ButtonProps = {
	timerMode?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = memo(({ children, timerMode, ...others }) => {
	return (
		<StyledButton className={`${timerMode ? 'break' : 'work'}`} {...others}>
			{children}
		</StyledButton>
	);
});

export default Button;
