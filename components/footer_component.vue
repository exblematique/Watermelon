<template>
  <footer>
    <span>© Watermelon | 2016 - {{ year }}</span>
  </footer>
</template>

<script>
const date = new Date();
export default {
  data() {
    return {
      year: date.getFullYear()
    }
  }
}
</script>

<style scoped>
</style>