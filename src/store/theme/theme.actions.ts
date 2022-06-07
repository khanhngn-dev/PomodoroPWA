import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducers.utils';
import { THEME_TYPES } from './theme.types';
import { ThemeConfig } from '../../theme/theme';
import { fetchThemeSetting, updateThemeSetting } from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';

type SetTheme = ActionWithPayload<THEME_TYPES.SET_THEME, ThemeConfig[]>;

export const setCurrentTheme = withMatcher(
	(themes: ThemeConfig[]): SetTheme => createAction(THEME_TYPES.SET_THEME, themes)
);

export const fetchThemeSettingAsync =
	(user: User | null) => async (dispatch: any, getState: any) => {
		const themeSetting = await fetchThemeSetting(user);
		console.log(themeSetting);
		if (!themeSetting) return;
		const { themes } = themeSetting;
		dispatch(setCurrentTheme(themes));
	};

export const updateThemeSettingAsync =
	(themes: ThemeConfig[]) => async (dispatch: any, getState: any) => {
		const {
			user: { currentUser },
		} = getState();
		updateThemeSetting(currentUser, themes);
		dispatch(setCurrentTheme(themes));
	};
