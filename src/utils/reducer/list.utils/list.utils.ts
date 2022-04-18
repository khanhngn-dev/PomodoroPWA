import { ListItem } from '../../../store/list/list.reducer';

export const checkItem = (
	items: ListItem[],
	index: number,
): ListItem[] =>
	items.map((item, i) =>
		i === index
			? {
					...item,
					complete: !item.complete,
					completedAt: !item.complete ? createDate() : 'Not Complete',
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

export const deleteItem = (items: ListItem[], index: number): ListItem[] =>
	items.filter((_, i) => i !== index);

export const sendNotification = (timerMode: boolean, time: number) => {
	let min = Math.floor(time / 60);
	let sec = time % 60;
	let timeStr = `(for ${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec})`;
	window?.Notification?.requestPermission()?.then((result) => {
		if (result === 'granted') {
			new Notification('From Pomodoro', {
				body: `${
					!timerMode ? `Let's take a break ${timeStr}` : `Let's get back to work ${timeStr}`
				}`,
			});
		} else if (result === 'denied') {
			alert(
				`${!timerMode ? `Let's take a break ${timeStr}` : `Let's get back to work ${timeStr}`}`
			);
		}
	});
};
