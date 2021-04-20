<template>
  <header>
    <img
      class="logo"
      src="/logo.webp"
      alt="Logo de l'association Watermelon"
    >
    <div class="links">
      <NuxtLink
        to="/"
      >
        Accueil
      </NuxtLink>
      <NuxtLink
        to="/team"
      >
        Équipe
      </NuxtLink>
      <NuxtLink
        to="/contact"
      >
        Contact
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
/* Particular CSS when the link forward to the current page */
.nuxt-link-exact-active{
  cursor: default;
  pointer-events: none;
  background-color: red;
}
div {
  height: auto;
  width: auto;
}
</style>