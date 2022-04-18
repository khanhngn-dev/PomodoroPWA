import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectUserReducer = (state: RootState) => state.user;

export const selectCurrentUser = createSelector([selectUserReducer], (user) => user.currentUser);

export const selectUserError = createSelector([selectUserReducer], (user) => user.error);
