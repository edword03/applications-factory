import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ThemeTypes {
	DARK = 'dark',
	LIGHT = 'light',
}

const initialState: ThemeTypes = ThemeTypes.LIGHT;

export const themeSlice = createSlice({
	name: 'theme-slice',
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<ThemeTypes>) => {
			state = action.payload;
		},
	},
});

export const { reducer: themeReducer } = themeSlice;
export const { changeTheme } = themeSlice.actions;
