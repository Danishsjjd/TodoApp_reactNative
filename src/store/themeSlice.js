import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	dark: false,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state, action) => {
			state.dark = action.payload;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
