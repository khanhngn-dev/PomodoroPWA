import { AuthError, User } from 'firebase/auth';
import { AnyAction } from 'redux';
import { signUpFailed, setCurrentUser, signInFailed } from './user.action';

export type UserState = {
	currentUser: User | null;
	error: null | AuthError;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (setCurrentUser.match(action)) {
		return {
			...state,
			currentUser: action.payload,
		};
	}
	if (signUpFailed.match(action)) {
		return {
			...state,
			error: action.payload,
		};
	}
	if (signInFailed.match(action)) {
		return {
			...state,
			error: action.payload,
		};
	}
	return state;
};
