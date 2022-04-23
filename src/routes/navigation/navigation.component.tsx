import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

import { selectTimerMode } from '../../store/timer/timer.selectors';

import NavBar from '../../components/nav-bar/nav-bar.component';
import { ThemeProvider } from 'styled-components';
import { selectCurrentTheme } from '../../store/theme/theme.selectors';

const Navigation = () => {
	const timerMode = useSelector(selectTimerMode);
	const themes = useSelector(selectCurrentTheme);
	return (
		<ThemeProvider theme={!timerMode ? themes[0] : themes[1]}>
			<NavBar></NavBar>
			<Outlet />
		</ThemeProvider>
	);
};

export default Navigation;
