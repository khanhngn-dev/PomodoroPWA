import { USER_TYPES } from './user.types';
import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducers.utils';
import { AuthError, User } from 'firebase/auth';
import {
	createUserFromEmailAndPassword,
	signOutUserAsync,
	signInUserWithEmailAndPassWord,
} from '../../utils/firebase/firebase.utils';

type SetCurrentUser = ActionWithPayload<USER_TYPES.SET_CURRENT_USER, User | null>;

export const setCurrentUser = withMatcher(
	(user: User | null): SetCurrentUser => createAction(USER_TYPES.SET_CURRENT_USER, user)
);

type SignUpFailed = ActionWithPayload<USER_TYPES.SIGN_UP_FAILED, AuthError>;

export const signUpFailed = withMatcher(
	(error: AuthError): SignUpFailed => createAction(USER_TYPES.SIGN_UP_FAILED, error)
);

export const signUp =
	(email: string, password: string, displayName: string) =>
	async (dispatch: any, getState: any) => {
		try {
			const { user } = await createUserFromEmailAndPassword(email, password);
			dispatch(setCurrentUser(user));
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
		dispatch(setCurrentUser(user));
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
