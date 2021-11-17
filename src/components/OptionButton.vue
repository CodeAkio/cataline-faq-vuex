<template>
  <li class="option">
    <img
      v-if="icon"
      class="option__icon"
      :src="require(`@/assets/images/${icon}`)"
      :alt="text"
    />
    <span class="option__text">{{ text }}</span>
  </li>
</template>

<script>
export default {
  name: 'OptionButton',
  props: {
    icon: {
      type: String
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.option {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;
  align-content: center;
  align-items: center;
  padding: 16px 32px;
}
.option:hover {
  background-color: rgba(63, 68, 82, 0.7);
}
.option__icon {
  width: 24px;
  height: 24px;
}
.option__text {
  font-size: 16px;
  color: #f5f6f8;
}
</style>
