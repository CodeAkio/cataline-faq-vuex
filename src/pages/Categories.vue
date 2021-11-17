<template>
  <div class="categories__container">
    <img
      :src="require('@/assets/images/astronaut.svg')"
      alt="Little astronaut"
      id="categories__banner"
    />

    <div class="categories__title_container">
      <h2 class="categories__title">Perguntas frequentes</h2>
      <p class="categories__subtitle">Esolha a categoria desejada</p>
    </div>

    <ul>
      <OptionButton icon="rocket.svg" text="Basecamp" />
      <OptionButton icon="astronaut-helmet.svg" text="Bootcamp" />
      <OptionButton icon="student-hat.svg" text="Cataline" />
      <OptionButton icon="partnership.svg" text="Parcerias" />
    </ul>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import OptionButton from '@/components/OptionButton'
export default {
  name: 'Categories',
  components: { OptionButton }
}
</script>

<style scoped>
#categories__banner {
  margin: 18px 32px;
  width: 242px;
  height: 112px;
}

.categories__title_container {
  padding: 0 36px;
}

.categories__title {
  font-size: 20px;
  font-weight: bold;
  color: #f5f6f8;
  margin-bottom: 0.438rem;
}

.categories__subtitle {
  font-size: 13px;
  color: #f5f6f8;
}

ul {
  list-style: none;
  padding: 0 6px;
  margin-top: 32px;
}
</style>
