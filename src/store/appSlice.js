import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	recentlyVisitedUrl: '/dashboard',
	showLogout: false,
	sideBarStatus: false,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		showLoader: (state) => {
			state.loading = true;
		},
		hideLoader: (state) => {
			state.loading = false;
		},
		setRecentUrl: (state, { payload }) => {
			state.recentlyVisitedUrl = payload;
		},
		setShowLogout: (state, { payload }) => {
			state.showLogout = payload;
		},
		toggleSidebar: (state, { payload }) => {
			state.sideBarStatus = payload;
		},
	},
});

export const { showLoader, hideLoader, setRecentUrl, setShowLogout, toggleSidebar } =
	appSlice.actions;

export default appSlice.reducer;
