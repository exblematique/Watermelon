<template>
  <header>
    <div class="flex underline">
      <div class="logo-header">
        <img
          class="logo"
          src="/logo.webp"
          alt="Logo de l'association Watermelon"
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
  width: auto;
  margin: 0 20px;
  font-size: 20px;
  border-bottom: papayawhip solid;
}

.currentRoute{
  border-bottom: red solid;
}

.flex{
  display: flex;
  flex-basis: 100px;
}
.underline > *{
  margin: 0 auto;
}
.links{
  height: auto;
  width: auto;
  justify-content: space-evenly;
}
.underline{
  width: 100%;
  justify-content: space-between;
  border-bottom: grey solid;
  flex-wrap: wrap;
}
.logo-header{
  width: auto;
  margin: 20px auto;
}

/*
 * HEADER
 */
header {
  padding: 30px 60px;
}
</style>