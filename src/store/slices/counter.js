import { createSlice } from "@reduxjs/toolkit";
const INITIAL_VALUE = {
  movies_number: 0,
  favorites: [],
};

const counter = createSlice({
  name: "counter",
  initialState: INITIAL_VALUE,
  reducers: {
    addMovie: (state, action) => {
      const movie = action.payload;

      const movieIndex = state.favorites.findIndex((m) => m.id === movie.id);
      if (movieIndex === -1) {
        state.favorites.push(movie);
        state.movies_number = state.favorites.length;
      } else {
        state.favorites.splice(movieIndex, 1);
        state.added = "remove";
        state.movies_number = state.favorites.length;
      }
    },

    removeMovie: (state, action) => {
      const movieInd = state.favorites.findIndex(
        (m) => m.id === action.payload.id
      );
      state.favorites.splice(movieInd, 1);
      state.movies_number = state.favorites.length;
    },
  },
});

export const { addMovie, removeMovie } = counter.actions;
export default counter.reducer;

// state.favorites.push(action.payload);
// state.movies_number = state.favorites.length;
// console.log(action.payload);
// console.log(state.favorites.length);
// console.log(state.favorites);
// const movieId = action.payload.id;

// const indexMovie = {
//   ...movie,
//   added: false,
// };

// console.log(state.favorites.splice(movieIndex, 1));
