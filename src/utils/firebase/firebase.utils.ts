import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	setDoc,
	collection,
	getDocs,
	deleteDoc,
	QuerySnapshot,
	getDoc,
} from 'firebase/firestore';
import { ListItem } from '../../store/list/list.reducer';
import { INITIAL_STATE } from '../../store/timer/timer.reducer';

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
	user: User | null,
	displayName: string,
	items: ListItem[]
): Promise<QuerySnapshot<ListItem[]> | undefined> => {
	if (!user) return;
	const itemsRef = collection(db, `/users/${user.uid}/list`);
	const itemsSnapshot = await getDocs(itemsRef);
	const settingsRef = collection(db, `/users/${user.uid}/settings`);

	try {
		if (itemsSnapshot.empty) {
			items.forEach(async (item) => {
				const itemRef = doc(itemsRef, item.id);
				await setDoc(itemRef, item);
			});
		}
		const infoRef = doc(settingsRef, 'info');
		if (!(await getDoc(infoRef)).exists()) {
			await setDoc(infoRef, { displayName });
		}
		const clockRef = doc(settingsRef, 'clock');
		if (!(await getDoc(clockRef)).exists()) {
			const { breakTime, defaultTime } = INITIAL_STATE;
			await setDoc(clockRef, { breakTime, defaultTime });
		}
	} catch (error) {
		console.error(error);
	}
	return itemsSnapshot as QuerySnapshot<ListItem[]>;
};

export const fetchUserTasks = async (user: User | null): Promise<ListItem[] | undefined> => {
	if (!user) return;
	const itemsRef = collection(db, `/users/${user.uid}/list`);
	const itemsSnapshot = await getDocs(itemsRef);
	return itemsSnapshot.docs.map((item) => item.data()) as unknown as ListItem[];
};

export const updateUserTask = async (
	user: User | null,
	item: ListItem | undefined
): Promise<undefined> => {
	if (!user || !item) return;
	const itemRef = doc(db, `/users/${user.uid}/list`, item.id);
	try {
		await setDoc(itemRef, { ...item, openDesc: false });
	} catch (error) {
		console.error(error);
	}
};

export const deleteUserTask = async (
	user: User | null,
	item: ListItem | undefined
): Promise<undefined> => {
	if (!user || !item) return;
	const itemRef = doc(db, `/users/${user.uid}/list`, item.id);
	try {
		await deleteDoc(itemRef);
	} catch (error) {
		console.error(error);
	}
};

export const updateClockSetting = async (
	user: User | null,
	defaultTime: number,
	breakTime: number
): Promise<undefined> => {
	if (!user) return;
	const clockRef = doc(db, `/users/${user.uid}/settings`, 'clock');
	try {
		await setDoc(clockRef, { defaultTime, breakTime });
	} catch (error) {
		console.error(error);
	}
};

export const fetchClockSetting = async (
	user: User | null
): Promise<undefined | { defaultTime: number; breakTime: number }> => {
	if (!user) return;
	const clockRef = doc(db, `/users/${user.uid}/settings`, 'clock');
	try {
		return (await (await getDoc(clockRef)).data()) as { defaultTime: number; breakTime: number };
	} catch (error) {
		console.error(error);
	}
};
