<template>
  <div class="app">
    <header_component />
    <transition name="grow">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import header_component from "@/components/header_component";
export default { components: {  header_component } }
</script>
<style scoped>
.grow-enter-active {
  animation: grow .5s;
}
@keyframes grow {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 100%;
  }
}
</style>