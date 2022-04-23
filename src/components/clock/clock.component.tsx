import { ChangeEvent } from 'react';
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

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		let time = 0;
		const tenthMin = Math.floor(minutes / 10);
		const min = minutes % 10;
		const tenthSec = Math.floor(seconds / 10);
		const sec = seconds % 10;
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
				name='tenth-min'
				onChange={changeHandler}
				// value={tenthMin}
				value={Math.floor(minutes / 10)}
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
			<Dial
				onChange={changeHandler}
				// value={min}
				value={minutes % 10}
				name='min'
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
			<DialDivider className={`${isCounting ? 'blip' : ''}`}>:</DialDivider>
			<Dial
				name='tenth-sec'
				onChange={changeHandler}
				// value={tenthSec}
				value={Math.floor(seconds / 10)}
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
			<Dial
				name='sec'
				onChange={changeHandler}
				// value={sec}
				value={seconds % 10}
				timerMode={timerMode}
				disabled={isCounting}
				type='number'
			/>
		</ClockContainer>
	);
};

export default Clock;
