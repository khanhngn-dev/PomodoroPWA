import { User } from 'firebase/auth';
import { fetchUserDocument, updateUserDocument } from '../../utils/firebase/firebase.utils';
import {
	createAction,
	ActionWithPayload,
	// Action,
	withMatcher,
} from '../../utils/reducer/reducers.utils';
import { ListItem } from './list.reducer';
import { LIST_TYPES } from './list.types';

type SetCompleteItem = ActionWithPayload<LIST_TYPES.SET_COMPLETE_ITEM, ListItem[]>;

export const setCompleteItem = withMatcher(
	(items: ListItem[]): SetCompleteItem => createAction(LIST_TYPES.SET_COMPLETE_ITEM, items)
);

export const setCompleteItemAsync = (items: ListItem[]) => async (dispatch: any, getState: any) => {
	const {
		user: { currentUser },
	} = getState();
	dispatch(setCompleteItem(items));
	updateUserDocument(currentUser, items);
};

type RemoveItemFromList = ActionWithPayload<LIST_TYPES.REMOVE_ITEM_FROM_LIST, ListItem[]>;

export const removeItemFromList = withMatcher(
	(items: ListItem[]): RemoveItemFromList => createAction(LIST_TYPES.REMOVE_ITEM_FROM_LIST, items)
);

export const removeItemFromListAsync =
	(items: ListItem[]) => async (dispatch: any, getState: any) => {
		const {
			user: { currentUser },
		} = getState();
		dispatch(removeItemFromList(items));
		updateUserDocument(currentUser, items);
	};

type AddItemToList = ActionWithPayload<LIST_TYPES.ADD_ITEM_TO_LIST, ListItem>;

export const addItemToList = withMatcher(
	(item: ListItem): AddItemToList => createAction(LIST_TYPES.ADD_ITEM_TO_LIST, item)
);

export const addItemToListAsync = (item: ListItem) => async (dispatch: any, getState: any) => {
	dispatch(addItemToList(item));
	const {
		user: { currentUser },
		list: { items },
	} = getState();
	updateUserDocument(currentUser, items);
};

type ToggleDetailed = ActionWithPayload<LIST_TYPES.TOGGLE_DETAILED, ListItem[]>;

export const toggleDetailed = withMatcher(
	(items: ListItem[]): ToggleDetailed => createAction(LIST_TYPES.TOGGLE_DETAILED, items)
);

type UpdateList = ActionWithPayload<LIST_TYPES.UPDATE_LIST, ListItem[]>;

export const updateList = withMatcher(
	(itemObj: ListItem[]): UpdateList => createAction(LIST_TYPES.UPDATE_LIST, itemObj)
);

export const fetchUserList = (user: User | null) => async (dispatch: any, getState: any) => {
	try {
		const docRef = await fetchUserDocument(user);
		if (!docRef) return;
		const { items } = docRef;
		dispatch(updateList(items));
	} catch (error) {
		console.error(error);
	}
};
