import { AnyAction } from 'redux';
import { addItemToList, removeItemFromList, setCompleteItem } from './list.actions';

export type ListItem = {
	taskName: string;
	complete: boolean;
	completedAt: string;
};

export type ListType = {
	// readonly itemCount: number;
	readonly items: ListItem[];
};

const defaultListItems: ListItem[] = [
	{
		taskName: 'Kick Trong Nhan',
		complete: false,
		completedAt: 'Not Complete',
	},
	{
		taskName: 'Choi voi TS',
		complete: true,
		completedAt: '13:51 - 14/04/2022',
	},
];

const INITIAL_STATE: ListType = {
	// itemCount: 1,
	items: defaultListItems,
};

export const listReducer = (state = INITIAL_STATE, action: AnyAction) => {
	if (setCompleteItem.match(action)) {
		return {
			...state,
			items: action.payload,
		};
	}
	if (removeItemFromList.match(action)) {
		return {
			...state,
			items: action.payload,
		};
	}
	if (addItemToList.match(action)) {
		return {
			...state,
			items: [...state.items, action.payload],
		};
	}
	return state;
};
