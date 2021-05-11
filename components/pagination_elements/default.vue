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
      type: Object,
      default: null
    }
  }
}
</script>
<style scoped>
div{
  min-height: 15rem;
  height: 90%;
  padding: 1rem;
  border-radius: 2rem;
  background-color: rgba(255, 89, 91 ,0.4);


}
p {
  margin: auto;
  width: 90%;
}
</style>
