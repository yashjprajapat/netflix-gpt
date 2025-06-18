import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGeminiMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
      //using same action to add diff data by refactoring the payload
    },
  },
});

export const { toggleGptSearchView, addGeminiMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
