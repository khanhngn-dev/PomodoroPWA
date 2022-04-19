import { onAuthStateChanged } from 'firebase/auth';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';

import Spinner from './components/spinner/spinner.component';
import { setCurrentUserAsync } from './store/user/user.action';
import { auth } from './utils/firebase/firebase.utils';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const SignIn = lazy(() => import('./routes/signin/signin.component'));
const SignUp = lazy(() => import('./routes/signup/signup.component'));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			dispatch(setCurrentUserAsync(user));
			unsub();
		});
	}, [dispatch]);

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
