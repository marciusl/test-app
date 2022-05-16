<template>
  <div class="img-loader component">
    <div
      class="img-container"
      :class="{ 'is-loaded': !loading, 'is-animated': animated }"
    >
      <img :src="src" :alt="alt" ref="image" v-show="!loading" />
    </div>

    <div class="loading" v-if="loading">
      <UiPulseLoading></UiPulseLoading>
    </div>
  </div>
</template>

<script>
/**
 * @description Component check image loading status and show loading animation if image still not loaded
 */
import UiPulseLoading from './progress-loaders/UiPulseLoading.vue';

export default {
  name: 'UiImgLoader',
  components: {
    UiPulseLoading,
  },
  props: {
    alt: {
      type: String,
    },
    src: {
      type: String,
      required: true,
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    src: {
      handler: 'checkLoadingStatus',
      immediate: true,
    },
  },

  data() {
    return {
      loading: true,
      error: false,
    };
  },

  methods: {
    checkLoadingStatus() {
      this.loading = true;
      const interval = setInterval(() => {
        if (this.$refs.image && this.$refs.image.complete) {
          this.loading = false;
          clearInterval(interval);
        }
      }, 250);
    },
  },
};
</script>

<style lang="scss" scoped>
.img-loader.component {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    position: absolute;
  }
  .img-container {
    transition: width 0.2s;
    width: 100%;
    height: 100%;
    &.is-animated {
      width: 0;
    }
    &.is-loaded {
      width: 100%;
    }
  }
}
</style>
