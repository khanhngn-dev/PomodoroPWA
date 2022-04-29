import { FC, InputHTMLAttributes } from 'react';
import { useTransition } from 'react-spring';
import { DialWrapper } from './dial.styles';

type DialProps = {
	timerMode: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Dial: FC<DialProps> = ({ timerMode, value, ...others }) => {
	const transition = useTransition(value, {
		from: {
			opacity: 0,
			scale: 0.9,
		},
		enter: {
			opacity: 1,
			scale: 1,
		},
		leave: {
			opacity: 0,
			display: 'none',
		},
		config: {
			duration: 200,
		},
	});

	return transition((styles, item) => (
		<DialWrapper style={styles} value={item} type='string' {...others} />
	));
};

export default Dial;
