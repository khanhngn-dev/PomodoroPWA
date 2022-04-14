import { useEffect, ChangeEvent, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBreakTime, setDefaultTime, setStartTime } from '../../store/timer/timer.actions';
import {
	selectCurrentTime,
	selectIsCounting,
	selectTimerMode,
} from '../../store/timer/timer.selectors';

import Dial from '../dial/dial.component';
import { DialContainer, DialDivider } from './dial-container.styles';

const Counter = () => {
	const dispatch = useDispatch();
	const currentTime = useSelector(selectCurrentTime);
	const isCounting = useSelector(selectIsCounting);
	const timerMode = useSelector(selectTimerMode);
	const minutes = useMemo(() => Math.floor(currentTime / 60), [currentTime]);
	const seconds = useMemo(() => currentTime % 60, [currentTime]);

	const [tenthMin, setTenthMin] = useState(0);
	const [min, setMin] = useState(0);
	const [tenthSec, setTenthSec] = useState(0);
	const [sec, setSec] = useState(0);

	useEffect(() => {
		document.title = isCounting
			? `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
			: 'Pomodoro';
	}, [minutes, seconds, isCounting]);

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
		switch (event.target.name) {
			case 'tenth-min':
				setTenthMin(+event.target.value);
				time = +event.target.value * 10 * 60 + min * 60 + tenthSec * 10 + sec;
				break;
			case 'min':
				setMin(+event.target.value);
				time = tenthMin * 10 * 60 + +event.target.value * 60 + tenthSec * 10 + sec;
				break;
			case 'tenth-sec':
				setTenthSec(+event.target.value);
				time = tenthMin * 10 * 60 + min * 60 + +event.target.value * 10 + sec;
				break;
			case 'sec':
				setSec(+event.target.value);
				time = tenthMin * 10 * 60 + min * 60 + tenthSec * 10 + +event.target.value;
				break;
		}
		dispatch(setStartTime(time));
		timerMode ? dispatch(setBreakTime(time)) : dispatch(setDefaultTime(time));
	};

	return (
		<DialContainer>
			<Dial
				dialType={`minutes ${Math.floor(minutes / 10) === tenthMin ? 'idle' : 'changing'}`}
				name='tenth-min'
				onChange={changeHandler}
				value={tenthMin}
				maxLength={1}
				timerMode={timerMode}
			/>
			<Dial
				dialType={`minutes ${minutes % 10 === min ? 'idle' : 'changing'}`}
				onChange={changeHandler}
				value={min}
				name='min'
				maxLength={1}
				timerMode={timerMode}
			/>
			<DialDivider className={`${isCounting ? 'blip' : ''} ${timerMode ? 'break' : 'work'}`}>
				:
			</DialDivider>
			<Dial
				dialType={`seconds ${Math.floor(seconds / 10) === tenthSec ? 'idle' : 'changing'}`}
				name='tenth-sec'
				onChange={changeHandler}
				value={tenthSec}
				maxLength={1}
				timerMode={timerMode}
			/>
			<Dial
				dialType={`seconds ${seconds % 10 === sec ? 'idle' : 'changing'}`}
				name='sec'
				onChange={changeHandler}
				value={sec}
				maxLength={1}
				timerMode={timerMode}
			/>
		</DialContainer>
	);
};

export default Counter;
