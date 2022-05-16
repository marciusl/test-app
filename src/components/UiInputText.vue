<template>
  <div class="ui-input-text">
    <div class="slot-before" v-if="$slots.before">
      <slot name="before"></slot>
    </div>

    <div class="input-wrapper">
      <label :class="{ 'is-label-error': error }" :for="`input-${name}`"
        >{{ label }}
      </label>

      <input
        :id="`input-${name}`"
        :name="name"
        :type="inputType"
        :class="inputClasses"
        :value="value"
        :placeholder="placeholder"
        v-on="listeners"
      />

      <div class="slot-bottom" v-if="$slots.bottom">
        <slot name="bottom" />
      </div>
    </div>

    <div class="slot-after" v-if="$slots.after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInputText',
  props: {
    label: { type: String },
    name: { type: String, required: true },
    value: { required: true },
    placeholder: { type: String },
    error: {
      type: [String, Boolean],
      default: false,
    },
  },
  computed: {
    inputClasses() {
      return {
        'is-input-error': this.error,
        'border-radius-start': !this.$slots.before,
        'border-radius-end': !this.$slots.after,
      };
    },
    inputType() {
      return 'text';
    },
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$padding: 5px;
@import '../scss/variables';

.ui-input-text {
  display: flex;
  align-items: center;
  margin: 0 0 15px 0;
  .input-wrapper {
    width: 100%;
  }
  .slot-bottom {
    padding-top: $padding;
    font-size: 13px;
    color: $color-gray-50;
  }
  .slot-after,
  .slot-before {
    color: $color-gray-50;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
  .slot-before {
    border: 1px solid $color-gray-50;
    border-right: 0;
    border-top-left-radius: $radius;
    border-bottom-left-radius: $radius;
  }
  .slot-after {
    border: 1px solid $color-gray-50;
    border-left: 0;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
  }

  label {
    cursor: pointer;
    display: block;
    color: $color-gray-50;
    font-size: 13px;
    padding-bottom: $padding;
  }
  input {
    width: 100%;
    background-color: transparent;
    border: 1px solid $color-gray-50;
    font-size: 17px;
    padding: 15px 12px;
    outline: none;
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
  }
  .is-input-error {
    border: 1px solid red;
  }
  .is-label-error {
    color: red;
  }
}
</style>
