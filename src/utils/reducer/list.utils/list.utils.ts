import { ChangeEvent } from 'react';
import { ListItem } from '../../../store/list/list.reducer';

export const checkItem = (
	items: ListItem[],
	index: number,
	event: ChangeEvent<HTMLInputElement>
): ListItem[] =>
	items.map((item, i) =>
		i === index
			? {
					taskName: event.target.name,
					complete: event.target.checked,
					completedAt: event.target.checked ? createDate() : 'Not Complete',
			  }
			: item
	);

export const createDate = (): string => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
	return `${hours < 10 ? `0${hours}` : `${hours}`}:${
		minutes < 10 ? `0${minutes}` : `${minutes}`
	} - ${day < 10 ? `0${day}` : `${day}`}/${month < 10 ? `0${month}` : `${month}`}/${year}`;
};

export const deleteItem = (items: ListItem[], index: number): ListItem[] =>
	items.filter((item, i) => i !== index);
