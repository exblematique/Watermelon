<template>
  <div>
    <h2>{{ data.title }}</h2>
    <p>{{ data.description }}</p>
  </div>
</template>
<script>
export default {
  layout: 'element',
  props: {
    data: {
      type: Object,/* TODO REMOVE{
        title: String,
        description: String
      },*/
      default: null
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
div * {
  text-align: center;
}
</style>