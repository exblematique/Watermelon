<template>
  <component
    :is="component"
    v-if="component"
    :data="data"
  />
</template>

<script>
export default {
  name: "PaginationItem",
  props: {
    'data': {
      type: Object,
      default: null
    },
    'type': {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      component: null
    }
  },
  computed: {
    loader() {
      if (!this.type) {
        return null
      }
      return () => import(`@/components/pagination_elements/${this.type}`)
    }
  },
  mounted() {
    this.loader()
        .then(() => {
          this.component = () => this.loader()
        })
        .catch(() => {
          this.component = () => import('@/components/pagination_elements/default')
        })
  }
}
</script>

<style scoped>
</style>