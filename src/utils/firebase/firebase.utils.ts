import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDT5Gnc3-qh1v_wDzknuLUqYcQI-ACTZhM',
	authDomain: 'pomodoro-pwa-5cb39.firebaseapp.com',
	projectId: 'pomodoro-pwa-5cb39',
	storageBucket: 'pomodoro-pwa-5cb39.appspot.com',
	messagingSenderId: '1011256982258',
	appId: '1:1011256982258:web:62a4b6da1c5c59365dae6b',
	measurementId: 'G-8223PMKBCN',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
