import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieResult: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
      if (!state.showGptSearch) {
        state.gptMovieResult = null;
      }
    },
    addGptMovieResult: (state, action) => {
      state.gptMovieResult = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
