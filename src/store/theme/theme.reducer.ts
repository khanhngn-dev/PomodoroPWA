import { AnyAction } from 'redux';
import { ThemeConfig, pbT } from '../../theme/theme';
import { setCurrentTheme } from './theme.actions';

type ThemeType = {
	currentTheme: ThemeConfig[];
};

const INITIAL_STATE: ThemeType = {
	currentTheme: pbT,
};

export const themeReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (setCurrentTheme.match(action)) {
		return {
			...state,
			currentTheme: action.payload,
		};
	}
	return state;
};
