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
  border-bottom: rgba(254, 249, 227, 1) solid;
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
  -webkit-filter: invert(47%) sepia(20%) saturate(4891%) hue-rotate(326deg) brightness(102%) contrast(99%) drop-shadow(0 0 1px #96b70e);
  filter: invert(47%) sepia(20%) saturate(4891%) hue-rotate(326deg) brightness(102%) contrast(99%) drop-shadow(0 0 1px #96b70e);
}
/********** STYLE FOR LINKS **********/
.flexItem a{
  color: white;
  font-size: 1.1rem;
  filter: drop-shadow(0 0 1px rgba(255, 89, 91, 0.6));
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
.currentRoute a {
  filter: drop-shadow(0 0 1px #ff595b);
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