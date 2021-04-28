<template>
  <header>
    <div class="flex underline">
      <div class="logo-header">
        <img
          class="logo-header"
          src="/assets/logo.webp"
          alt="Logo de l'association Watermelon"
        >
        <img
          class="logo-header logo-txt"
          src="/assets/txt-watermelon.svg"
          alt="Watermelon"
        >
      </div>
      <div class="flex links">
        <div
          v-for="(link, index) in links"
          :key="index"
          class="flexItem"
          :class="{currentRoute : currentLink(link.to)}"
        >
          <NuxtLink :to="link.to">
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() { return {
    links: [
      {
        to: "/",
        text: "Accueil"
      },{
        to: "/abilities",
        text: "Compétences"
      },{
        to: "/team",
        text: "Équipe"
      },{
        to: "/contact",
        text: "Contact"
      }
    ]
  }},
  methods: {
    currentLink(link) {
      if (link === '/')
        return this.$route.name === "index";
      else
        return "/"+this.$route.name === link;
    }
  }
}
</script>

<style scoped>
/* Particular CSS when the link forward to the current page */
.nuxt-link-exact-active{
  cursor: default;
  pointer-events: none;
}

.flexItem {
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  margin: 0 20px;
  font-size: 20px;
  border-bottom: rgba(255,255,255,0.5) solid;
}

.currentRoute{
  border-bottom: rgba(255,0,0,0.8) solid;
}

.flex{
  display: flex;
}
.underline > *{
  margin: 0 auto;
}
.links{
  height: 100%;
  width: auto;
}
.underline{
  height: 100%;
  width: 93%;
  margin: auto;
  border-bottom: rgba(128,128,128,0.5) solid;
}
.logo-header{
  display: flex;
  justify-content: center;
  height: 3rem;
  width: auto;
  margin: auto;
}
.logo-txt{
  padding-left: 0.5rem;
  height: 2rem;
}
@media (max-width: 47rem){
  .logo-txt {
    display: none;
  }
}
</style>