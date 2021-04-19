<template>
  <div
    :style="member.style"
  >
    <h2>{{ member.name }}</h2>
    <h3
      v-for="(role, index) in member.roles"
      :key="index"
    >
      {{ role }}
    </h3>
  </div>
</template>
<script>
export default {
  layout: 'member',
  props: {
    member: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
div {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h2 {
  margin-top: 350px;
}
</style>