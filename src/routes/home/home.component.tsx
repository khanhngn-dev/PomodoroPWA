import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTime, selectIsCounting } from '../../store/timer/timer.selectors';
import { asyncTimer, setIsCounting, resetAsync } from '../../store/timer/timer.actions';

import Counter from '../../components/dial-container/dial-container.component';
import Button from '../../components/button/button.component';
import { Home, ButtonContainer } from './home.styles';
import TaskList from '../../components/task-list/task-list.component';
import ItemForm from '../../components/itemForm/item-form.component';

const Clock = () => {
	const isCounting = useSelector(selectIsCounting);
	const currentTime = useSelector(selectCurrentTime);
	const dispatch = useDispatch();

	useEffect(() => {
		if (currentTime <= 0) {
			setTimeout(() => dispatch(resetAsync()), 500);
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
				<Button onClick={startStopHandler}>{`${isCounting ? 'Stop' : 'Start'} Counter`}</Button>
				<Button onClick={resetHandler}>Reset Counter</Button>
			</ButtonContainer>
			<TaskList />
			<ItemForm />
		</Home>
	);
};

export default Clock;
