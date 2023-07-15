import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum FiltersTypes {
	ALL = 'all',
	COMPLETED = 'completed',
	NOT_COMPLETED = 'not-completed',
}

const initialState: FiltersTypes = FiltersTypes.ALL;

export const filtersSlice = createSlice({
	name: 'filter-slice',
	initialState,
	reducers: {
		changeFilter: (state, action: PayloadAction<FiltersTypes>) => {
			state = action.payload;
		},
	},
});

export const { reducer: filterReducer } = filtersSlice;
export const { changeFilter } = filtersSlice.actions;
