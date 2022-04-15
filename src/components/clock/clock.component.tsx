import { useEffect, ChangeEvent, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setBreakTime,
	setDefaultTime,
	setStartTime,
	setTimerMode,
	resetAsync,
} from '../../store/timer/timer.actions';
import {
	selectCurrentTime,
	selectIsCounting,
	selectTimerMode,
	selectDefaultTime,
	selectBreakTime,
} from '../../store/timer/timer.selectors';
import { sendNotification } from '../../utils/reducer/list.utils/list.utils';

import Dial from '../dial/dial.component';
import { ClockContainer, DialDivider } from './clock.styles';

const Clock = () => {
	const dispatch = useDispatch();
	const currentTime = useSelector(selectCurrentTime);
	const isCounting = useSelector(selectIsCounting);
	const timerMode = useSelector(selectTimerMode);
	const defTime = useSelector(selectDefaultTime);
	const breakTime = useSelector(selectBreakTime);
	const minutes = useMemo(() => Math.floor(currentTime / 60), [currentTime]);
	const seconds = useMemo(() => currentTime % 60, [currentTime]);

	const [tenthMin, setTenthMin] = useState(0);
	const [min, setMin] = useState(0);
	const [tenthSec, setTenthSec] = useState(0);
	const [sec, setSec] = useState(0);

	// DO NOT ADD timerMode OR DOOMSDAY
	useEffect(() => {
		if (currentTime <= 0) {
			setTimeout(() => {
				dispatch(setTimerMode(!timerMode));
				dispatch(resetAsync());
				sendNotification(timerMode, !timerMode ? breakTime : defTime);
			}, 500);
		}
	}, [currentTime, dispatch]);

	useEffect(() => {
		document.title = isCounting
			? `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} - ${
					timerMode ? 'Taking a break off' : 'Working'
			  }`
			: 'Pomodoro';
	}, [minutes, seconds, isCounting, timerMode]);

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
		<ClockContainer>
			<Dial
				dialType={`minutes ${Math.floor(minutes / 10) === tenthMin ? 'idle' : 'changing'}`}
				name='tenth-min'
				onChange={changeHandler}
				value={tenthMin}
				min={0}
				max={9}
				timerMode={timerMode}
			/>
			<Dial
				dialType={`minutes ${minutes % 10 === min ? 'idle' : 'changing'}`}
				onChange={changeHandler}
				value={min}
				name='min'
				min={0}
				max={9}
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
				min={0}
				max={9}
				timerMode={timerMode}
			/>
			<Dial
				dialType={`seconds ${seconds % 10 === sec ? 'idle' : 'changing'}`}
				name='sec'
				onChange={changeHandler}
				value={sec}
				min={0}
				max={9}
				timerMode={timerMode}
			/>
		</ClockContainer>
	);
};

export default Clock;
