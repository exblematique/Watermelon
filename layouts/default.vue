<template>
  <div
    class="app"
  >
    <header_component
      class="section header"
    />
    <transition
      name="grow"
      mode="in-out"
    >
      <nuxt
        class="section content"
      />
    </transition>
    <footer_component
      class="section footer"
    />
  </div>
</template>

<script>
import header_component from "@/components/header_component";
import footer_component from "@/components/footer_component";
export default {
  components: {
    header_component,
    footer_component
  }
}
</script>
<style>
body {
  background-image:
      linear-gradient(
          180deg,
          rgba(254, 249, 227, 0.90) 4rem,
          rgba(254, 249, 227, 0.75) 100%
      ), url('/background/watermelon.webp');
  background-color: #fef9e3;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.index{
  background-image:
      linear-gradient(
          180deg,
          rgba(255, 228, 235, 1),
          rgba(255, 228, 235, 0.5) 75%,
          rgba(255,255,255,0.2)
      ), url('/background/fond1.webp');
}
</style>
<style scoped>

.section{
  width: 100%;
}
.content{
  min-height: calc(100% - 15rem);
  margin: 3rem auto;
  width: fit-content;
  max-width: 95%;
}
.header {
  height: 5rem;
}
.footer {
  padding: 1em 0;
}
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
    opacity: 1;
  }
}
</style>