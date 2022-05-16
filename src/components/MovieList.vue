<template>
  <div class="movie-list">
    <MovieListItem tableHeader />
    <div v-for="(detail, index) in allMovies" :key="index">
      <MovieListItem :detail="detail" />
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem';
import { mapGetters } from 'vuex';

export default {
  name: 'MovieList',
  components: { MovieListItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('movie', ['allMovies']),
  },
};
</script>

<style lang="scss" scoped>
.movie-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0 0 0;
}
</style>
