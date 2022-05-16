export default {
  allMovies(state) {
    return state.movies;
  },
  currentMovie(state, movieId) {
    return (
      (movieId && state.movies.find((m) => m.id === movieId)) ||
      state.currentMovie
    );
  },
};
