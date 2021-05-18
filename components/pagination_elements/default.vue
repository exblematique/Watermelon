<template>
  <div
    class="element"
    :style="{'background-image': 'linear-gradient(#ffcfdd, #ffcfdd), url(/background/abilities/'+data.img}"
  >
    <div class="bgColor text">
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
  background-blend-mode: color;
}
.text{
  min-height: 15rem;
  height: fit-content;
  border-radius: 0 0 2rem 2rem;
}
p {
  margin: auto;
  width: 90%;
}
</style>
