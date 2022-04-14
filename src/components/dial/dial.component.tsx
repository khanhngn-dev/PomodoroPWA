import { FC, InputHTMLAttributes, memo } from 'react';
import { DialWrapper } from './dial.styles';

type DialProps = {
	dialType: string;
	timerMode: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Dial: FC<DialProps> = memo(({ dialType, timerMode, ...others }) => {
	return (
		<DialWrapper
			type='string'
			className={`dial ${dialType} ${timerMode ? 'break' : 'work'}`}
			{...others}
		></DialWrapper>
	);
});

export default Dial;
