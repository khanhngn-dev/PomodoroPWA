import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTime, selectIsCounting } from '../../store/timer/timer.selectors';
import { asyncTimer, setIsCounting, resetAsync } from '../../store/timer/timer.actions';

import Clock from '../../components/clock/clock.component';
import Button from '../../components/button/button.component';
import TaskList from '../../components/task-list/task-list.component';
import ItemForm from '../../components/item-form/item-form.component';
import { HomeContainer, ButtonContainer } from './home.styles';

const Home = () => {
	const isCounting = useSelector(selectIsCounting);
	const currentTime = useSelector(selectCurrentTime);
	const dispatch = useDispatch();

	const startStopHandler = useCallback(() => {
		dispatch(setIsCounting(!isCounting));
		dispatch(asyncTimer());
	}, [isCounting, dispatch]);

	const resetHandler = useCallback(() => {
		dispatch(resetAsync());
	}, [dispatch]);

	return (
		<HomeContainer className='relative m-auto flex flex-col flex-nowrap items-center justify-center rounded-cxl w-screen'>
			<Clock />
			<ButtonContainer className='flex flex-nowrap justify-center items-center w-[90vw] max-w-[500px]'>
				<Button buttonType='base' onClick={startStopHandler} disabled={!Boolean(currentTime)}>{`${
					isCounting ? 'Stop' : 'Start'
				}`}</Button>
				<Button buttonType='base' onClick={resetHandler}>
					Reset
				</Button>
			</ButtonContainer>
			<TaskList />
			<ItemForm />
		</HomeContainer>
	);
};

export default Home;
