import { configureStore, combineReducers } from '@reduxjs/toolkit';

import appSlice from './appSlice';
import { getPreloadedState, saveToLocalStorage } from './localStorage';
import authSlice from './authSlice';

const combinedReducer = combineReducers({
	app: appSlice,
	auth: authSlice,
});

const rootReducer = (state, action) => {
	console.log('state ', state);
	console.log('action ', action);
	/**
	 * to reset whole app state to initial state
	 */
	if (action.type === 'auth/setUser') {
		state = undefined;
	}

	return combinedReducer(state, action);
};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: getPreloadedState(),
});

function onStateChange() {
	saveToLocalStorage(store.getState());
}

store.subscribe(onStateChange);

export default store;
