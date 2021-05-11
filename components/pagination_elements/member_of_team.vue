<template>
  <div
    v-show="ready"
    class="member"
  >
    <div class="member-inner">
      <div
        class="member-front"
        :style="data.style"
      >
        <img
          :src="data.svg"
          :alt="data.img"
          class="svg"
          @load="loaded"
        >
        <h3
          v-for="(role, index) in data.roles"
          :key="index"
        >
          {{ role }}
        </h3>
      </div>
      <div
        class="member-back"
      >
        <h2>{{ data.name }}</h2>
        <p>{{ data.description }}</p>
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
  },
  data(){
    return {
      ready: false
    }
  },
  methods:{
    loaded(){
      this.ready = true;
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

.member-back{
  background-color: rgba(255, 89, 91 ,0.2);
}
p {
  margin: auto;
  width: 90%;
}
</style>