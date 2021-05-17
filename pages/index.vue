<template>
  <section>
    <div class="logo-home">
      <div
        class="logo-img"
      >
        <img
          src="/assets/logo.webp"
          alt="Logo de l'association Watermelon"
        >
      </div>
      <img
        src="/assets/txt-watermelon.svg"
        alt="Watermelon"
        class="logo-txt dropShadow"
      >
    </div>
    <h1>Association de réalisation et production audiovisuelle</h1>
  </section>
</template>
<script>
export default {
  beforeMount() {
    document.body.className = "index";
  },
  beforeDestroy() {
    document.body.className = "";
  }
}
</script>
<style scoped>
.logo-home {
  position: relative;
  height: 15rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

.logo-img {
  position: absolute;
  height: 100%;
  width: 100%;

  /* Add the blur effect */
  filter: blur(0.25rem);
  -webkit-filter: blur(0.25rem);
}

.logo-img > img{
  height: 100%;
}

.logo-txt {
  position: relative;
  height: 7rem;
}
</style>