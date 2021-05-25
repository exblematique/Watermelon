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
/* Add exception for index page */
.index header, .index header::before{
  background-color: transparent;
  box-shadow: none;
}
.index .logo-txt{
  filter: none;
}
.index header::before{
  position: absolute;
  background-color: white;
  clip-path: ellipse(49% 50%);
  height: 2px;
}
header{
  background: #ffe4eb;
}
.flex{
   display: flex;

 }
.flex * {
  z-index: 2;
}

/********** DISPLAY LINE IN HEADER **********/
.underline > *{
  margin: 0 auto;
}
.underline{
  height: 100%;
  width: 93%;
  margin: auto;
}
/****** Add invert border radius in header ********/
header::before{
  content: "";
  position: absolute;
  /* Top is the header size */
  top: 5rem;
  left: 0;
  background-color: transparent;
  height: 4rem;
  width: 100%;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 -2rem 0 0 #ffe4eb;
  z-index: 1;
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
  font-size: 1.1rem;
  color: #ff595b;
}
.flexItem {
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  margin: 0 1rem;
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