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

type RemoveItemFromList = ActionWithPayload<LIST_TYPES.REMOVE_ITEM_FROM_LIST, ListItem[]>;

export const removeItemFromList = withMatcher(
	(items: ListItem[]): RemoveItemFromList => createAction(LIST_TYPES.REMOVE_ITEM_FROM_LIST, items)
);

type AddItemToList = ActionWithPayload<LIST_TYPES.ADD_ITEM_TO_LIST, ListItem>;

export const addItemToList = withMatcher(
	(item: ListItem): AddItemToList => createAction(LIST_TYPES.ADD_ITEM_TO_LIST, item)
);

type ToggleDetailed = ActionWithPayload<LIST_TYPES.TOGGLE_DETAILED, ListItem[]>;

export const toggleDetailed = withMatcher(
	(items: ListItem[]): ToggleDetailed => createAction(LIST_TYPES.TOGGLE_DETAILED, items)
);
