<template>
  <div class="ui-textarea">
    <label :class="{ 'is-label-error': error }" :for="`textarea-${name}`"
      >{{ label }}
    </label>
    <textarea
      :id="`textarea-${name}`"
      :class="inputClasses"
      :style="textareaStyles"
      :placeholder="placeholder"
      @focus="applyStyles"
      @input="handleChange"
      :value="value"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'UiTextarea',
  props: {
    value: { type: String },
    label: { type: String },
    name: { type: String, required: true },
    placeholder: { type: String },
    autosize: { type: Boolean, default: true },
    error: {
      type: [String, Boolean],
      default: false,
    },
  },

  watch: {
    value(newVal) {
      this.applyStyles();
    },
  },

  data() {
    return {
      textareaHeight: false,
    };
  },

  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    },
    getTextAreaLineSize() {
      const style = window.getComputedStyle(this.$el);
      return parseInt(style.lineHeight, 10);
    },

    setTextAreaSize(height) {
      let newHeight = height;
      if (!height) {
        const size = this.getTextAreaLineSize();
        newHeight = calculateContentHeight(this.$el, size);
      }
      this.textareaHeight = `${newHeight}px`;
    },
    applyStyles() {
      if (this.autosize) {
        this.setTextAreaSize(40);
        this.$nextTick().then(() => this.setTextAreaSize());
      }
    },
  },

  computed: {
    textareaStyles() {
      return {
        height: this.textareaHeight,
      };
    },
    inputClasses() {
      return {
        'is-input-error': this.error,
      };
    },
  },

  mounted() {
    this.$nextTick().then(() => this.applyStyles());
  },
};

function calculateContentHeight(el, lineHeight) {
  const origHeight = el.style.height;
  const height = el.offsetHeight;
  const scrollHeight = el.scrollHeight;
  el.style.overflow = 'hidden';
  if (height >= scrollHeight) {
    el.style.height = height + lineHeight + 'px';
    if (scrollHeight < el.scrollHeight) {
      el.style.height = origHeight;
      return height;
    }
  }
  return scrollHeight;
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
$padding: 5px;
.ui-textarea {
  label {
    cursor: pointer;
    display: block;
    color: $color-gray-50;
    font-size: 13px;
    padding-bottom: $padding;
  }

  textarea {
    width: 100%;
    border-radius: $radius;
    background-color: transparent;
    border: 1px solid $color-gray-50;
    font-size: 17px;
    padding: 15px 12px;
    outline: none;
    margin: 0 0 15px 0;
  }

  &:focus {
    border: 1px solid #1e2221;
  }
  &.border-radius-start {
    border-top-left-radius: $radius;
    border-bottom-left-radius: $radius;
  }
  &.border-radius-end {
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
  }
  .is-input-error {
    border: 1px solid red;
  }
  .is-label-error {
    color: red;
  }
}
</style>
