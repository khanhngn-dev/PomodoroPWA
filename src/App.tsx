import { Routes, Route } from 'react-router';
import { Suspense } from 'react';

import Spinner from './components/spinner/spinner.component';
import Navigation from './routes/navigation/navigation.component';
import Clock from './routes/home/home.component';

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
