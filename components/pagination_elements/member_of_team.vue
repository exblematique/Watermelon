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
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>