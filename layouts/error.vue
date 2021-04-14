<template>
  <h1 v-if="error.statusCode === 404">
    Désolé vous vous êtes perdu, il n'y a rien ici
  </h1> <h1 v-else>
    Oupsi, il n'y a une erreur chez nous
  </h1>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>