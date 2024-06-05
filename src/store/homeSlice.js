import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    url: {},
    genres: {},
};

export const homeSlice = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        getAPIConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    }
});

export const { getAPIConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;