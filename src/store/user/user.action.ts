import { USER_TYPES } from './user.types';
import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducers.utils';
import { AuthError, User } from 'firebase/auth';
import { fetchUserList } from '../list/list.actions';
import {
	createUserFromEmailAndPassword,
	signOutUserAsync,
	signInUserWithEmailAndPassWord,
	createUserDocument,
} from '../../utils/firebase/firebase.utils';
import { fetchTimerSettingsAsync } from '../timer/timer.actions';

type SetCurrentUser = ActionWithPayload<USER_TYPES.SET_CURRENT_USER, User | null>;

export const setCurrentUser = withMatcher(
	(user: User | null): SetCurrentUser => createAction(USER_TYPES.SET_CURRENT_USER, user)
);

export const setCurrentUserAsync = (user: User | null) => async (dispatch: any, getState: any) => {
	dispatch(setCurrentUser(user));
	dispatch(fetchUserList(user));
	dispatch(fetchTimerSettingsAsync(user));
};

type SignUpFailed = ActionWithPayload<USER_TYPES.SIGN_UP_FAILED, AuthError>;

export const signUpFailed = withMatcher(
	(error: AuthError): SignUpFailed => createAction(USER_TYPES.SIGN_UP_FAILED, error)
);

export const signUp =
	(email: string, password: string, displayName?: string) =>
	async (dispatch: any, getState: any) => {
		try {
			const { user } = await createUserFromEmailAndPassword(email, password);
			await createUserDocument(user, displayName);
			// dispatch(setCurrentUserAsync(user));
			
		} catch (error) {
			dispatch(signUpFailed(error as AuthError));
		}
	};

type SignInFailed = ActionWithPayload<USER_TYPES.SIGN_IN_FAILED, AuthError>;

export const signInFailed = withMatcher(
	(error: AuthError): SignInFailed => createAction(USER_TYPES.SIGN_IN_FAILED, error)
);

export const signIn = (email: string, password: string) => async (dispatch: any, getState: any) => {
	try {
		const { user } = await signInUserWithEmailAndPassWord(email, password);
		createUserDocument(user);
		// dispatch(setCurrentUserAsync(user));
	} catch (error) {
		dispatch(signUpFailed(error as AuthError));
	}
};

export const signOutUser = () => async (dispatch: any) => {
	try {
		signOutUserAsync();
		dispatch(setCurrentUser(null));
	} catch (error) {
		console.error(error);
	}
};
