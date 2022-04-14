import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCurrentTime,
	selectIsCounting,
	selectTimerMode,
} from '../../store/timer/timer.selectors';
import {
	asyncTimer,
	setIsCounting,
	resetAsync,
	setTimerMode,
} from '../../store/timer/timer.actions';

import Counter from '../../components/dial-container/dial-container.component';
import Button from '../../components/button/button.component';
import { Home, ButtonContainer } from './home.styles';
import TaskList from '../../components/task-list/task-list.component';
import ItemForm from '../../components/item-form/item-form.component';

const Clock = () => {
	const isCounting = useSelector(selectIsCounting);
	const currentTime = useSelector(selectCurrentTime);
	const timerMode = useSelector(selectTimerMode);
	const dispatch = useDispatch();

	// DO NOT ADD timerMode OR DOOMSDAY
	useEffect(() => {
		if (currentTime <= 0) {
			setTimeout(() => {
				dispatch(setTimerMode(!timerMode));
				dispatch(resetAsync());
			}, 500);
		}
	}, [currentTime, dispatch]);

	const startStopHandler = useCallback(() => {
		dispatch(setIsCounting(!isCounting));
		dispatch(asyncTimer());
	}, [isCounting, dispatch]);

	const resetHandler = useCallback(() => {
		dispatch(resetAsync());
	}, [dispatch]);

	return (
		<Home>
			<Counter></Counter>
			<ButtonContainer className='button-container'>
				<Button timerMode={timerMode} onClick={startStopHandler}>{`${
					isCounting ? 'Stop' : 'Start'
				} Counter`}</Button>
				<Button timerMode={timerMode} onClick={resetHandler}>
					Reset Counter
				</Button>
			</ButtonContainer>
			<TaskList />
			<ItemForm />
		</Home>
	);
};

export default Clock;
