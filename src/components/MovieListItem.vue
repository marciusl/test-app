<template>
  <div class="movie-detail-wrapper" @click="routeToDetails">
    <div class="movie-detail --list-header" v-if="tableHeader">
      <div class="--image" />
      <div class="--name">Name</div>
      <div class="--description">Description</div>
    </div>
    <div class="movie-detail" v-else>
      <UiImgLoader
        :src="detail.src"
        class="--image"
        :class="{ '--image-empty': !detail.src }"
      />
      <div class="--name">{{ detail.id }}. {{ detail.name }}</div>
      <div class="--description">{{ detail.description }}</div>
    </div>
  </div>
</template>

<script>
import UiImgLoader from '@/components/UiImgLoader';

export default {
  name: 'MovieListItem',
  components: { UiImgLoader },
  props: {
    detail: { type: Object, required: false, default: null },
    tableHeader: { type: Boolean, required: false, default: false },
  },
  methods: {
    routeToDetails() {
      this.$router.push({
        name: 'movie-edit-page',
        params: { id: this.detail.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-detail-wrapper {
  display: flex;
  cursor: pointer;
  .movie-detail {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    .--name,
    .--description {
      flex: 1;
    }
    .--image {
      width: auto;
      /deep/ img {
        width: 45px;
        height: auto;
      }
    }
    .--image-empty {
      width: 45px;
    }
  }
  .--list-header {
    .--image {
      width: 45px;
    }
  }
}
</style>
