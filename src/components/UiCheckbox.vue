<template>
  <div class="ui-checkbox">
    <input :id="labelId" :checked="checked" v-on="listeners" type="checkbox" />
    <label :for="labelId">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'UiCheckbox',

  props: {
    checked: { type: Boolean, required: true }, // v-model
    label: { type: String, required: false },
  },

  model: {
    prop: 'checked',
    event: 'change',
  },

  components: {},

  methods: {
    getRandomInt() {
      const min = 1;
      const max = 1000000000;
      return Math.floor(Math.random() * (max - min + 1) + min);
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
.ui-checkbox {
  display: flex;
  margin: 0 0 15px 0;

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type='checkbox']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }
  input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  input[type='checkbox']:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  input[type='checkbox']:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

  label {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
}
</style>
