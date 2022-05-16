export default {
  setMovies(state, movies) {
    state.movies = movies;
  },
  updateMovie(state, movie) {
    state.movies = state.movies.map((m) => (m.id === movie.id ? movie : m));
  },
  addMovie(state, movie) {
    state.movies.push({ id: state.movies.length + 1, ...movie });
  },
  setCurrentMovie(state, movie) {
    state.currentMovie = movie;
  },
  setCurrentMovieById(state, id) {
    state.currentMovie = state.movies.find((m) => m.id === Number(id));
  },
  clearCurrentMovie(state) {
    state.currentMovie = null;
  },
  deleteMovie(state, movie) {
    state.movies = state.movies.filter((m) => m.id !== movie.id);
  },
};
