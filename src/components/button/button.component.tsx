import { FC, ButtonHTMLAttributes, memo } from 'react';
import { StyledButton } from './button.styles';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = memo(({ children, ...others }) => {
	return <StyledButton {...others}>{children}</StyledButton>;
});

export default Button;
