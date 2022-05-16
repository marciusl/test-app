<template>
  <form id="movie-form" class="movie-form" @submit.prevent="handleSubmit">
    <UiInputText
      v-model="form.name"
      name="name"
      placeholder="Enter name"
      label="Movie name"
      :error="errors['name']"
    />
    <UiTextarea
      v-model="form.description"
      name="description"
      placeholder="Enter description"
      label="Movie description"
      :error="errors['description']"
    />
    <UiInputText
      v-model="form.src"
      name="src"
      placeholder="Enter image link"
      label="Movie image"
    />
    <UiCheckbox label="Favorite" v-model="form.favorite" />
    <div class="--buttons">
      <UiButton type="submit">{{ submitBtnText }}</UiButton>
      <slot></slot>
    </div>
  </form>
</template>

<script>
import UiInputText from '@/components/UiInputText.vue';
import UiCheckbox from '@/components/UiCheckbox.vue';
import UiTextarea from './UiTextarea.vue';
import { mapMutations } from 'vuex';
import UiButton from './UiButton.vue';

const initialState = {
  name: '',
  description: '',
  favorite: '',
  src: '',
};

export default {
  name: 'MovieForm',
  components: { UiInputText, UiCheckbox, UiTextarea, UiButton },
  props: {
    update: { type: Boolean, default: false },
    providedFormData: { type: Object, required: false, default: null },
  },
  data() {
    return {
      form: initialState,
      errors: {},
    };
  },
  mounted() {
    this.form = this.update ? this.providedFormData : { ...this.form };
  },
  computed: {
    submitBtnText() {
      return this.update ? 'Update' : 'Submit';
    },
  },
  methods: {
    ...mapMutations('movie', ['addMovie']),
    handleSubmit(e) {
      this.errors = {};
      if (!this.form.name) {
        this.errors.name = 'Name required.';
      }
      if (!this.form.description) {
        this.errors.description = 'Description required.';
      }

      if (Object.keys(this.errors).length !== 0) {
        return;
      }

      this.$emit('submit', this.form);
      this.clearForm();
    },
    clearForm() {
      this.form = initialState;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-form {
  .--buttons {
    display: flex;
    gap: 10px;
  }
}
</style>
