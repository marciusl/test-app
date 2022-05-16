<template>
  <div class="home page">
    <MovieForm @submit="handleAddMovie" />
    <MovieList />
  </div>
</template>

<script>
import MovieForm from '@/components/MovieForm.vue';
import { mapMutations } from 'vuex';
import MovieList from '../components/MovieList.vue';

export default {
  name: 'HomePage',
  components: { MovieForm, MovieList },
  data() {
    return {};
  },
  methods: {
    ...mapMutations('movie', ['addMovie']),
    handleAddMovie(movie) {
      this.addMovie(movie);
    },
  },
};
</script>

<style lang="scss" scoped></style>
