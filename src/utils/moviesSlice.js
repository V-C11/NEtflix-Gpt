import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    latestMovies : null
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNewUpcoming: (state, action) => {
      state.newUpcoming = action.payload;
    },
    addLatestMovies: (state, action) => {
      state.latestMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addTrailerVideo,
  addNewUpcoming,
  addLatestMovies
} = movieSlice.actions;

export default movieSlice.reducer;
