import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectListReducer = (state: RootState) => state.list;

// export const selectListCount = createSelector([selectListReducer], (list) => list.itemCount);

export const selectListItems = createSelector([selectListReducer], (list) => list.items)
