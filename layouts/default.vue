<template>
  <div
    class="app"
    :class="{index: isIndex()}"
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
  },
  methods:{
    isIndex(){
      return this.$route.name === "index"
    }
  }
}
</script>
<style scoped>
.app{
  background-image:
      linear-gradient(
          180deg,
          #ffe4eb,
          rgba(104, 162, 254, 0.5)
      );
  background-color: #96b70e;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.index{
  background-image:
    linear-gradient(
        180deg,
        #ffe4eb,
        rgba(104, 162, 254, 0.5)
    ), url('/background/fond1.webp');
}
.section{
  width: 100%;
}
.content{
  min-height: calc(100% - 15rem);
  margin: 3rem auto;
  width: 95%;
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