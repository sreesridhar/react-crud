import { createSlice } from '@reduxjs/toolkit';
import { capitalize } from 'lodash';

const initialState = {
	me: {},
	auth: {},
	role: '',
};

export const authSlice = createSlice({
	name: 'auth', // name of the reducer
	initialState,
	reducers: {
		setUser: (state, { payload = {} }) => {
			state.me = payload;
			state.role = capitalize(payload?.groups?.[0]?.name);
		},
		setAuth: (state, { payload = {} }) => {
			state.auth = payload;
		},
		setUserProfile: (state, { payload = {} }) => {
			state.me = { ...state?.me, ...payload };
		},
	},
});

export const { setUser, setAuth, setUserProfile } = authSlice.actions;

export default authSlice.reducer;
