export const setDocumentTitle = (minutes: number, seconds: number, stateString: string) => {
	document.title = `${minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
	} - ${stateString}`;
};

export const sendNotification = (timerMode: boolean, time: number) => {
	let min = Math.floor(time / 60);
	let sec = time % 60;
	let timeStr = `(for ${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec})`;
	window?.Notification?.requestPermission()?.then((result) => {
		if (result === 'granted') {
			new Notification('From Pomodoro', {
				body: !timerMode ? `Let's take a break ${timeStr}` : `Let's get back to work ${timeStr}`,
			});
		} else if (result === 'denied') {
			alert(!timerMode ? `Let's take a break ${timeStr}` : `Let's get back to work ${timeStr}`);
		}
	});
};
