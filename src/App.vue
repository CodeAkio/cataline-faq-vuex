<template>
  <div class="container">
    <Card>
      <Categories />
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Categories from '@/pages/Categories'

export default {
  name: 'App',
  components: {
    Card,
    Categories
  }
}
</script>

<style>
.container {
  height: 100vh;
  background-color: #f5f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
