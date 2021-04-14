<template>
  <div :style="member.img">
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