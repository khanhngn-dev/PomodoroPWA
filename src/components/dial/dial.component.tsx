import { FC, InputHTMLAttributes } from 'react';
import { DialWrapper } from './dial.styles';

type DialProps = {
	timerMode: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Dial: FC<DialProps> = ({ timerMode, ...others }) => {
	return <DialWrapper type='string' {...others}></DialWrapper>;
};

export default Dial;
