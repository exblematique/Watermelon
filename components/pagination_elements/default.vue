<template>
  <div
    class="element"
    :style="{'background-image': 'url(/background/abilities/'+data.img}"
  >
    <div class="text">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
    </div>
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
.element{
  height: 100%;
  min-height: 30rem;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  border-radius: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
}
.text{
  display: flex;
  flex-direction: column;
  min-height: 12rem;
  height: 50%;
  border-radius: 0 0 2rem 2rem;
}
p {
  margin: auto auto 1rem;
  width: 90%;
  text-shadow: black 0 0 1rem;
}
</style>
