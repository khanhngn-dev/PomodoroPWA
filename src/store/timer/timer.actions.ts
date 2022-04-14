// import { ActionCreator, Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
import {
	createAction,
	ActionWithPayload,
	Action,
	withMatcher,
} from '../../utils/reducer/reducers.utils';
// import { RootState } from '../store';
import { TimerState } from './timer.reducer';
import { TIMER_TYPES } from './timer.types';

export type SetIsCounting = ActionWithPayload<TIMER_TYPES.SET_IS_COUNTING, boolean>;

export const setIsCounting = withMatcher(
	(bool: boolean): SetIsCounting => createAction(TIMER_TYPES.SET_IS_COUNTING, bool)
);

export type OnTimerStart = ActionWithPayload<
	TIMER_TYPES.ON_TIMER_START,
	ReturnType<typeof setInterval>
>;

export const onTimerStart = withMatcher(
	(interval: ReturnType<typeof setInterval>): OnTimerStart =>
		createAction(TIMER_TYPES.ON_TIMER_START, interval)
);

export type OnTimerCount = Action<TIMER_TYPES.ON_TIMER_COUNT>;

export const onTimerCount = withMatcher(
	(): OnTimerCount => createAction(TIMER_TYPES.ON_TIMER_COUNT)
);

export type OnTimerStop = ActionWithPayload<TIMER_TYPES.ON_TIMER_STOP, null>;

export const onTimerStop = withMatcher(
	(interval: null): OnTimerStop => createAction(TIMER_TYPES.ON_TIMER_STOP, interval)
);

export const asyncTimer = () => (dispatch: any, getState: any) => {
	const {
		timer: { isCounting },
	} = getState();
	if (isCounting) {
		let timeInterval = setInterval(() => dispatch(onTimerCount()), 1000);
		dispatch(onTimerStart(timeInterval));
		dispatch(onTimerCount());
	} else {
		const {
			timer: { interval },
		} = getState();
		clearInterval(interval);
		dispatch(onTimerStop(null));
	}
};

export type ResetTimer = ActionWithPayload<TIMER_TYPES.RESET_TIMER, TimerState>;

export const resetTimer = withMatcher(
	(initTimer: TimerState): ResetTimer => createAction(TIMER_TYPES.RESET_TIMER, initTimer)
);

export const resetAsync = () => (dispatch: any, getState: any) => {
	const {
		timer: { interval, defaultTime },
	} = getState();
	clearInterval(interval);
	dispatch(onTimerStop(null));
	dispatch(
		resetTimer({
			isCounting: false,
			currentTime: defaultTime,
			interval: null,
			defaultTime,
		})
	);
};

export type SetStartTime = ActionWithPayload<TIMER_TYPES.SET_START_TIME, number>;

export const setStartTime = withMatcher(
	(start: number): SetStartTime => createAction(TIMER_TYPES.SET_START_TIME, start)
);

export type SetDefaultTime = ActionWithPayload<TIMER_TYPES.SET_DEFAULT_TIME, number>;

export const setDefaultTime = withMatcher(
	(time: number): SetDefaultTime => createAction(TIMER_TYPES.SET_DEFAULT_TIME, time)
);
