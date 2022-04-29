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
		<DialWrapper className='m-5 border-none text-[3rem] font-bold bg-grey w-[60px] h-[80px] text-center leading-[80px] rounded-cl smooth-transition md:m-[12px]' style={styles} value={item} type='string' {...others} />
	));
};

export default Dial;
