import { Outlet } from 'react-router';
import NavBar from '../../components/nav-bar/nav-bar.component';

const Navigation = () => (
	<>
		<NavBar></NavBar>
		<Outlet />
	</>
);

export default Navigation;
