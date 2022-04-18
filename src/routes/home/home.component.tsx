import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCounting, selectTimerMode } from '../../store/timer/timer.selectors';
import { asyncTimer, setIsCounting, resetAsync } from '../../store/timer/timer.actions';

import Clock from '../../components/clock/clock.component';
import Button from '../../components/button/button.component';
import TaskList from '../../components/task-list/task-list.component';
import ItemForm from '../../components/item-form/item-form.component';
import { HomeContainer, ButtonContainer } from './home.styles';

const Home = () => {
	const isCounting = useSelector(selectIsCounting);
	const timerMode = useSelector(selectTimerMode);
	const dispatch = useDispatch();

	const startStopHandler = useCallback(() => {
		dispatch(setIsCounting(!isCounting));
		dispatch(asyncTimer());
	}, [isCounting, dispatch]);

	const resetHandler = useCallback(() => {
		dispatch(resetAsync());
	}, [dispatch]);

	return (
		<HomeContainer>
			<Clock />
			<ButtonContainer className='button-container'>
				<Button buttonType='base' timerMode={timerMode} onClick={startStopHandler}>{`${
					isCounting ? 'Stop' : 'Start'
				} Counter`}</Button>
				<Button buttonType='base' timerMode={timerMode} onClick={resetHandler}>
					Reset Counter
				</Button>
			</ButtonContainer>
			<TaskList />
			<ItemForm />
		</HomeContainer>
	);
};

export default Home;
