import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';

import Spinner from './components/spinner/spinner.component';
const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Clock = lazy(() => import('./routes/home/home.component'));

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Clock />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
