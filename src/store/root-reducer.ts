import { combineReducers } from 'redux';
import { timerReducer } from './timer/timer.reducer';
import { listReducer } from './list/list.reducer';

export const rootReducer = combineReducers({ timer: timerReducer, list: listReducer });
