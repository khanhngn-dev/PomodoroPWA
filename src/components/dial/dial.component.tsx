import { FC, InputHTMLAttributes, memo } from 'react';
import { DialWrapper } from './dial.styles';

type DialProps = {
	dialType: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Dial: FC<DialProps> = memo(({ dialType, ...others }) => {
	return (
		<DialWrapper
			type='string'
			className={`dial ${dialType}`}
			{...others}
		></DialWrapper>
	);
});

export default Dial;
