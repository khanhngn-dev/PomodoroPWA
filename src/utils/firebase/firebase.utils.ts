import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, QueryDocumentSnapshot } from 'firebase/firestore';
import { defaultListItems, ListItem, ListType } from '../../store/list/list.reducer';

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
export const db = getFirestore(app);
export const auth = getAuth(app);

export const createUserFromEmailAndPassword = async (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const signOutUserAsync = async () => signOut(auth);

export const signInUserWithEmailAndPassWord = async (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const createUserDocument = async (
	user: User | null
): Promise<QueryDocumentSnapshot<ListType> | undefined> => {
	if (!user) return;
	const itemsRef = doc(db, '/users', user.uid);
	const itemsSnapshot = await getDoc(itemsRef);
	if (!itemsSnapshot.exists()) {
		try {
			setDoc(itemsRef, {
				items: defaultListItems,
			});
		} catch (error) {
			console.error(error);
		}
	}
	return itemsSnapshot as QueryDocumentSnapshot<ListType>;
};

export const fetchUserDocument = async (user: User | null): Promise<ListType | undefined> => {
	if (!user) return;
	const itemsRef = doc(db, '/users', user.uid);
	const itemSnapshot = await getDoc(itemsRef);
	return itemSnapshot.data() as ListType;
};

export const updateUserDocument = async (
	user: User | null,
	items: ListItem[]
): Promise<undefined> => {
	if (!user) return;
	const itemsRef = doc(db, '/users', user.uid);
	try {
		setDoc(itemsRef, { items });
	} catch (error) {
		console.error(error);
	}
};
