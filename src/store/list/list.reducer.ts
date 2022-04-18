import { AnyAction } from 'redux';
import { addItemToList, removeItemFromList, setCompleteItem, toggleDetailed } from './list.actions';

export type ListItem = {
	readonly taskName: string;
	readonly complete: boolean;
	readonly completedAt: string;
	readonly description: string;
	readonly openDesc: boolean;
};

export type ListType = {
	// readonly itemCount: number;
	readonly items: ListItem[];
};

const defaultListItems: ListItem[] = [
	{
		taskName: 'Complete learning TS',
		complete: true,
		completedAt: '13:51 14/04/2022',
		description: 'Finish reading the TS handbook and start working on some projects',
		openDesc: false,
	},
	{
		taskName: 'Complete Pomodoro Clock using TS',
		complete: false,
		completedAt: 'Not Complete',
		description:
			'Added more features: Authentication and Firestore to store information across multiple devices',
		openDesc: true,
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
	if (toggleDetailed.match(action)) {
		return {
			...state,
			items: action.payload,
		};
	}
	return state;
};
