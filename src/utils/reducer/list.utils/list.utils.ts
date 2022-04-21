import { ListItem } from '../../../store/list/list.reducer';

export const checkItem = (items: ListItem[], id: string): ListItem[] =>
	items.map((item, i) =>
		item.id === id
			? {
					...item,
					complete: !item.complete,
					completedAt: !item.complete ? createDate() : 'Not Complete',
			  }
			: item
	);

export const toggleItem = (items: ListItem[], id: string): ListItem[] =>
	items.map((item) =>
		item.id === id
			? {
					...item,
					openDesc: !item.openDesc,
			  }
			: item
	);

export const createDate = (): string => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear() % 100;
	return `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`} ${
		day < 10 ? `0${day}` : `${day}`
	}/${month < 10 ? `0${month}` : `${month}`}/${year}`;
};

export const deleteItem = (items: ListItem[], id: string): ListItem[] =>
	items.filter((item) => item.id !== id);

export const generateTaskID = (taskName: string, description: string) =>
	`${Date.now() * Math.random()}${taskName.length * Math.random()}${
		description.length * Math.random()
	}`;
