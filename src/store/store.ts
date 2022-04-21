import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
	blacklist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
	key: 'root',
	storage,
	whitelist: ['timer', 'list'],
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(
	(middleware): middleware is Middleware => Boolean(middleware)
);

const composeEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
