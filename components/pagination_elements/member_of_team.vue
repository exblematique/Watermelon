<template>
  <div
    :style="data.style"
    class="member"
  >
    <img
      :src="data.svg"
      :alt="data.img"
      class="svg"
    >
    <h3
      v-for="(role, index) in data.roles"
      :key="index"
    >
      {{ role }}
    </h3>
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
.member {
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
}
.svg{
  height: 3rem;
  margin-top: 350px;
}

h3{
  padding-top: 1rem;
  margin: 0;
}
</style>