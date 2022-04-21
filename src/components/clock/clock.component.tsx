import { useEffect, ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setBreakTimeAsync,
	setDefaultTimeAsync,
	setStartTime,
} from '../../store/timer/timer.actions';
import {
	selectCurrentTime,
	selectIsCounting,
	selectTimerMode,
} from '../../store/timer/timer.selectors';

import Dial from '../dial/dial.component';
import { ClockContainer, DialDivider } from './clock.styles';

const Clock = () => {
	const dispatch = useDispatch();
	const currentTime = useSelector(selectCurrentTime);
	const isCounting = useSelector(selectIsCounting);
	const timerMode = useSelector(selectTimerMode);
	const minutes = Math.floor(currentTime / 60);
	const seconds = currentTime % 60;

	const [tenthMin, setTenthMin] = useState(0);
	const [min, setMin] = useState(0);
	const [tenthSec, setTenthSec] = useState(0);
	const [sec, setSec] = useState(0);

	// Initialization + Changes
	useEffect(() => {
		setTenthMin(Math.floor(minutes / 10));
		setMin(minutes % 10);
	}, [minutes]);

	useEffect(() => {
		setTenthSec(Math.floor(seconds / 10));
		setSec(seconds % 10);
	}, [seconds]);

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		let time = 0;
		const targetTime = +event.target.value;
		switch (event.target.name) {
			case 'tenth-min':
				time = targetTime * 10 * 60 + min * 60 + tenthSec * 10 + sec;
				break;
			case 'min':
				time = tenthMin * 10 * 60 + targetTime * 60 + tenthSec * 10 + sec;
				break;
			case 'tenth-sec':
				time = tenthMin * 10 * 60 + min * 60 + targetTime * 10 + sec;
				break;
			case 'sec':
				time = tenthMin * 10 * 60 + min * 60 + tenthSec * 10 + targetTime;
				break;
		}
		time = time > 5999 ? 5999 : time;
		dispatch(setStartTime(time));
		timerMode ? dispatch(setBreakTimeAsync(time)) : dispatch(setDefaultTimeAsync(time));
	};

	return (
		<ClockContainer>
			<Dial
				dialType={`tenth-min`}
				name='tenth-min'
				onChange={changeHandler}
				value={tenthMin}
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
			<Dial
				dialType={`min`}
				onChange={changeHandler}
				value={min}
				name='min'
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
			<DialDivider className={`${isCounting ? 'blip' : ''} ${timerMode ? 'break' : 'work'}`}>
				:
			</DialDivider>
			<Dial
				dialType={`tenth-sec`}
				name='tenth-sec'
				onChange={changeHandler}
				value={tenthSec}
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
			<Dial
				dialType={`sec`}
				name='sec'
				onChange={changeHandler}
				value={sec}
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
		</ClockContainer>
	);
};

export default Clock;
