<template>
  <div class="container">
    <Card />
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'App',
  components: {
    Card
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
