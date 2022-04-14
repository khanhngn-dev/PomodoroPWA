import { AnyAction } from 'redux';
import {
	onTimerCount,
	onTimerStart,
	setIsCounting,
	onTimerStop,
	resetTimer,
	setStartTime,
	setDefaultTime,
} from './timer.actions';

export type TimerState = {
	readonly isCounting: boolean;
	readonly currentTime: number;
	readonly defaultTime: number;
	readonly interval: null | ReturnType<typeof setInterval>;
};

export const INITIAL_STATE: TimerState = {
	isCounting: false,
	currentTime: 0,
	defaultTime: 1800,
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
			isCounting: action.payload.isCounting,
			currentTime: action.payload.currentTime,
			interval: action.payload.interval,
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
	return state;
};
