import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectThemeReducer = (state: RootState) => state.theme;

export const selectCurrentTheme = createSelector(
	[selectThemeReducer],
	(theme) => theme.currentTheme
);
