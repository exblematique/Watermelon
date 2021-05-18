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
          class="logo-header logo-txt redSvg"
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
.flex{
   display: flex;
 }
/********** DISPLAY LINE IN HEADER **********/
.underline > *{
  margin: 0 auto;
}
.underline{
  height: 100%;
  width: 93%;
  margin: auto;
  border-bottom: rgba(255, 207, 221, 0.9) solid;
}
/********** STYLE FOR LOGO **********/
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
/********** STYLE FOR LINKS **********/
.flexItem a{
  color: #ff595b;
  font-size: 1.1rem;
}
.flexItem {
display: flex;
align-items: center;
height: 100%;
width: auto;
margin: 0 1rem;
border-bottom: rgba(255, 89, 91, 0.4) solid;
}
.currentRoute{
border-bottom: rgba(255, 89, 91, 0.8) solid;
}
.links{
height: 100%;
width: auto;
}
/* Particular CSS when the link forward to the current page */
.nuxt-link-exact-active{
  cursor: default;
  pointer-events: none;
}

@media (max-width: 47rem){
  .logo-txt {
    display: none;
  }
}
</style>