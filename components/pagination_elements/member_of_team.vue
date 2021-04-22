<template>
  <div
    :style="data.style"
  >
    <h2>{{ data.name }}</h2>
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
div {
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
}
h2 {
  margin-top: 375px;
}

h3{
  margin: 5px;
}
</style>