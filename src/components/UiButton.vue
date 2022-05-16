<template>
  <div class="ui-button component">
    <button v-on="listeners" :type="type">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    value: { type: [String, Number, Boolean] }, // v-model
    type: { type: String, default: 'button' },
  },
  model: {
    prop: 'value',
    event: 'click',
  },
  components: {},
  methods: {
    getRandomInt() {
      const min = 1;
      const max = 1000000000;
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    handleClick(e) {
      this.$emit('click', e);
    },
  },
  computed: {
    labelId() {
      return `inputId${this.getRandomInt()}`;
    },
    listeners() {
      return {
        ...this.$listeners,
        change: (event) => this.$emit('change', event.target.checked),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-button.component {
}
</style>
