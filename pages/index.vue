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
        class="logo-txt"
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
  height: 19rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

.logo-img {
  position: absolute;
  height: 100%;
  width: 100%;
  filter: drop-shadow(0 0 1px #0005);
}

.logo-img > img{
  height: 100%;
}

.logo-txt {
  position: relative;
  height: 7rem;
  filter: drop-shadow(1px 1px 0.2rem #0007);
}
.index h1{
  color: #FFF;
}
h1{
  color: #ff595b;
  font-size: 2rem;
}
</style>