<template>
  <div class="movie-form-page">
    <MovieForm
      update
      :providedFormData="currentMovie"
      @submit="handleMovieUpdate"
    >
      <UiButton @click="handleDelete">Delete</UiButton>
      <UiButton @click="handleGoBack">Go Back</UiButton>
    </MovieForm>
  </div>
</template>

<script>
import MovieForm from '@/components/MovieForm';
import { mapGetters, mapMutations } from 'vuex';
import UiButton from '../components/UiButton.vue';

export default {
  name: 'MovieFormPage',
  components: { MovieForm, UiButton },
  computed: {
    ...mapGetters('movie', ['currentMovie']),
  },
  watch: {
    currentMovie(value) {
      !value &&
        this.$router.push({
          name: 'home-page',
        });
    },
  },
  created() {
    this.setCurrentMovieById(this.$route.params.id);
  },
  destroyed() {
    this.clearCurrentMovie();
  },
  methods: {
    ...mapMutations('movie', [
      'setCurrentMovieById',
      'clearCurrentMovie',
      'updateMovie',
      'deleteMovie',
    ]),
    handleGoBack() {
      this.$router.push({
        name: 'home-page',
      });
    },
    handleMovieUpdate(movie) {
      this.updateMovie(movie);
      this.$router.push({
        name: 'home-page',
      });
    },
    handleDelete() {
      this.deleteMovie(this.currentMovie);
      this.$router.push({
        name: 'home-page',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-form-page {
}
</style>
