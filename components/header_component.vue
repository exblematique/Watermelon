<template>
  <header>
    <div class="flex underline">
      <img
        class="logo"
        src="/logo.webp"
        alt="Logo de l'association Watermelon"
      >
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
div > .nuxt-link-exact-active{
  background-color: red;
}

.flexItem {
  height: 100%;
  width: auto;
  margin: auto 20px;
  font-size: 20px;
}

.flex{
  height: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.links{
  width: auto;
  justify-content: space-evenly;
}
.underline{
  width: 100%;
  justify-content: space-between;
  border-bottom: black solid;
}

/*
 * HEADER
 */
header {
  padding: 30px 60px;
}
</style>