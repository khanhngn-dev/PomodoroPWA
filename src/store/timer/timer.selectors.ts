import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectTimerReducer = (state: RootState) => state.timer;

export const selectCurrentTime = createSelector([selectTimerReducer], (timer) => timer.currentTime);

export const selectDefaultTime = createSelector([selectTimerReducer], (timer) => timer.defaultTime);

export const selectIsCounting = createSelector([selectTimerReducer], (timer) => timer.isCounting);

export const selectTimerMode = createSelector([selectTimerReducer], (timer) => timer.break);
