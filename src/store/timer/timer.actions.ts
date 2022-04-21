// import { ActionCreator, Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk'
import { User } from 'firebase/auth';
import { fetchClockSetting, updateClockSetting } from '../../utils/firebase/firebase.utils';
import {
	createAction,
	ActionWithPayload,
	Action,
	withMatcher,
} from '../../utils/reducer/reducers.utils';
import { setDocumentTitle, sendNotification } from '../../utils/reducer/timer.utils/timer.utils';

// import { RootState } from '../store';
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
	const { timer } = getState();
	const { isCounting, breakTime, defaultTime } = timer;
	if (isCounting) {
		const timerMode = timer.break;
		let stateString = timerMode ? 'Taking a break off' : 'Working';
		let { currentTime } = timer;
		currentTime--;
		let minutes = Math.floor(currentTime / 60);
		let seconds = currentTime % 60;
		setDocumentTitle(minutes, seconds, stateString);
		let timeInterval = setInterval(() => {
			seconds--;
			if (seconds === -1) {
				if (minutes === 0) {
					dispatch(setTimerMode(!timerMode));
					dispatch(resetAsync());
					sendNotification(timerMode, !timerMode ? breakTime : defaultTime);
					return;
				}
				minutes--;
				seconds = 59;
			}
			setDocumentTitle(minutes, seconds, stateString);
			dispatch(onTimerCount());
		}, 1000);
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

export const resetAsync = () => (dispatch: any, getState: any) => {
	const { timer } = getState();
	const newTime = timer.break ? timer.breakTime : timer.defaultTime;
	clearInterval(timer.interval);
	dispatch(onTimerStop(null));
	dispatch(setIsCounting(false));
	dispatch(setStartTime(newTime));
	document.title = 'Pomodoro';
};

type SetStartTime = ActionWithPayload<TIMER_TYPES.SET_START_TIME, number>;

export const setStartTime = withMatcher(
	(start: number): SetStartTime => createAction(TIMER_TYPES.SET_START_TIME, start)
);

type SetDefaultTime = ActionWithPayload<TIMER_TYPES.SET_DEFAULT_TIME, number>;

export const setDefaultTime = withMatcher(
	(time: number): SetDefaultTime => createAction(TIMER_TYPES.SET_DEFAULT_TIME, time)
);

export const setDefaultTimeAsync =
	(defaultTime: number) => async (dispatch: any, getState: any) => {
		const {
			user: { currentUser },
			timer: { breakTime },
		} = getState();
		dispatch(setDefaultTime(defaultTime));
		updateClockSetting(currentUser, defaultTime, breakTime);
	};

type SetBreakTime = ActionWithPayload<TIMER_TYPES.SET_BREAK_TIME, number>;

export const setBreakTime = withMatcher(
	(time: number): SetBreakTime => createAction(TIMER_TYPES.SET_BREAK_TIME, time)
);

export const setBreakTimeAsync = (breakTime: number) => async (dispatch: any, getState: any) => {
	const {
		user: { currentUser },
		timer: { defaultTime },
	} = getState();
	dispatch(setBreakTime(breakTime));
	updateClockSetting(currentUser, defaultTime, breakTime);
};

type SetTimerMode = ActionWithPayload<TIMER_TYPES.SET_TIMER_MODE, boolean>;

export const setTimerMode = withMatcher(
	(mode: boolean): SetTimerMode => createAction(TIMER_TYPES.SET_TIMER_MODE, mode)
);

export const fetchTimerSettingsAsync =
	(user: User | null) => async (dispatch: any, getState: any) => {
		const clockSetting = await fetchClockSetting(user);
		if (!clockSetting) return;
		const { defaultTime, breakTime } = clockSetting;
		const {
			timer
		} = getState();
		const timerMode = timer.break;
		dispatch(setBreakTime(breakTime));
		dispatch(setDefaultTime(defaultTime));
		timerMode ? dispatch(setStartTime(breakTime)) : dispatch(setStartTime(defaultTime));
	};
