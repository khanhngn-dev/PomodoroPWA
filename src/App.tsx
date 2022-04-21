import { onAuthStateChanged } from 'firebase/auth';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';

import Spinner from './components/spinner/spinner.component';
import { setCurrentUserAsync } from './store/user/user.action';
import { selectCurrentUser } from './store/user/user.selectors';
import { auth } from './utils/firebase/firebase.utils';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const SignIn = lazy(() => import('./routes/signin/signin.component'));
const SignUp = lazy(() => import('./routes/signup/signup.component'));

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			dispatch(setCurrentUserAsync(user));
		});
		return unsub;
	}, [dispatch]);

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='/signin' element={user ? <Navigate to='/' replace /> : <SignIn />} />
					<Route path='/signup' element={user ? <Navigate to='/' replace /> : <SignUp />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
