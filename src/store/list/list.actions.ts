import { User } from 'firebase/auth';
import {
	fetchUserTasks,
	updateUserTask,
	deleteUserTask,
} from '../../utils/firebase/firebase.utils';
import {
	createAction,
	ActionWithPayload,
	// Action,
	withMatcher,
} from '../../utils/reducer/reducers.utils';
import { deleteItem } from '../../utils/reducer/list.utils/list.utils';
import { ListItem } from './list.reducer';
import { LIST_TYPES } from './list.types';

type SetCompleteItem = ActionWithPayload<LIST_TYPES.SET_COMPLETE_ITEM, ListItem[]>;

export const setCompleteItem = withMatcher(
	(items: ListItem[]): SetCompleteItem => createAction(LIST_TYPES.SET_COMPLETE_ITEM, items)
);

export const setCompleteItemAsync =
	(items: ListItem[], id: string) => async (dispatch: any, getState: any) => {
		const {
			user: { currentUser },
		} = getState();
		dispatch(setCompleteItem(items));
		updateUserTask(
			currentUser,
			items.find((item) => item.id === id)
		);
	};

type RemoveItemFromList = ActionWithPayload<LIST_TYPES.REMOVE_ITEM_FROM_LIST, ListItem[]>;

export const removeItemFromList = withMatcher(
	(items: ListItem[]): RemoveItemFromList => createAction(LIST_TYPES.REMOVE_ITEM_FROM_LIST, items)
);

export const removeItemFromListAsync =
	(items: ListItem[], id: string) => async (dispatch: any, getState: any) => {
		const {
			user: { currentUser },
		} = getState();
		dispatch(removeItemFromList(deleteItem(items, id)));
		deleteUserTask(
			currentUser,
			items.find((item) => item.id === id)
		);
	};

type AddItemToList = ActionWithPayload<LIST_TYPES.ADD_ITEM_TO_LIST, ListItem>;

export const addItemToList = withMatcher(
	(item: ListItem): AddItemToList => createAction(LIST_TYPES.ADD_ITEM_TO_LIST, item)
);

export const addItemToListAsync = (item: ListItem) => async (dispatch: any, getState: any) => {
	dispatch(addItemToList(item));
	const {
		user: { currentUser },
	} = getState();
	updateUserTask(currentUser, item);
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
		const items = await fetchUserTasks(user);
		if (!items) return;
		dispatch(updateList(items));
	} catch (error) {
		console.error(error);
	}
};
