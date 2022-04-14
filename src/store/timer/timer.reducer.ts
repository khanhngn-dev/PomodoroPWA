import { AnyAction } from 'redux';
import {
	onTimerCount,
	onTimerStart,
	setIsCounting,
	onTimerStop,
	resetTimer,
	setStartTime,
	setDefaultTime,
	setTimerMode,
	setBreakTime,
} from './timer.actions';

export type TimerState = {
	readonly break: boolean;
	readonly isCounting: boolean;
	readonly currentTime: number;
	readonly defaultTime: number;
	readonly breakTime: number;
	readonly interval: null | ReturnType<typeof setInterval>;
};

export const INITIAL_STATE: TimerState = {
	break: false,
	isCounting: false,
	currentTime: 0,
	defaultTime: 1800,
	breakTime: 900,
	interval: null,
};

export const timerReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (setIsCounting.match(action)) {
		return {
			...state,
			isCounting: action.payload,
		};
	}
	if (onTimerStart.match(action)) {
		return {
			...state,
			interval: action.payload,
		};
	}
	if (onTimerCount.match(action)) {
		return {
			...state,
			currentTime: state.currentTime - 1,
		};
	}
	if (onTimerStop.match(action)) {
		return {
			...state,
			interval: action.payload,
		};
	}
	if (resetTimer.match(action)) {
		return {
			...state,
			currentTime: action.payload,
		};
	}
	if (setStartTime.match(action)) {
		return {
			...state,
			currentTime: action.payload,
		};
	}
	if (setDefaultTime.match(action)) {
		return {
			...state,
			defaultTime: action.payload,
		};
	}
	if (setTimerMode.match(action)) {
		return {
			...state,
			break: action.payload,
		};
	}
	if (setBreakTime.match(action)) {
		return {
			...state,
			breakTime: action.payload,
		};
	}
	return state;
};
