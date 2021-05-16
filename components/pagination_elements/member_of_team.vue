<template>
  <div
    class="member"
  >
    <div class="member-inner">
      <div
        class="member-front bgColor"
        :style="data.style"
      >
        <img
          :src="data.svg"
          :alt="data.img"
          class="svg"
        >
      </div>
      <div
        class="member-back bgColor"
      >
        <h2>{{ data.firstName }} {{ data.lastName }}</h2>
        <h3
          v-for="(role, index) in data.roles"
          :key="index"
        >
          {{ role }}
        </h3>
        <p>{{ data.description }}</p>
        <fa
          v-if="data.facebook"
          :icon="['fab','facebook']"
        />
        <h3>{{ data.rs }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'memberOfTeam',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.svg{
  height: 3rem;
  padding-top: 9rem;
}

h3{
  padding-top: 1rem;
  margin: 0;
}
.member {
  height: 18rem;
  width: 18rem;
  perspective: 62rem;
  background-color: transparent;
}
/** CSS to flap card **/
.member-inner {
  position: relative;
  width: 100%;
  height: 100%;
  animation: rotate 1s;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.member:hover .member-inner, .member-back{
  transform: rotateY(180deg);
}
.member-front, .member-back{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.member-front{
  background-repeat: no-repeat;
  background-size: cover;
}

.member-front * {
  color: white;
}

p {
  margin: auto;
  width: 90%;
}

@keyframes rotate {
  from {
    transform: rotateY(100deg);
  }

  to {
    transform: rotateY(0);
  }
}
</style>