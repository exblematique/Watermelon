<template>
  <component
    :is="component"
    v-if="visible && component"
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
    },
    'visibleTime': {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      component: null,
      visible: false
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
  // When page is mounted
  // Load the corresponding component
  // Then create timer to display each element
  mounted() {
    this.loader()
        .then(() => {
          this.component = () => this.loader()
        })
        .catch(() => {
          this.component = () => import('@/components/pagination_elements/default')
        })
        .finally(() => {
          setTimeout(() => this.visible = true, this.visibleTime);
        });
  }
}
</script>
<style scoped>
.opacity-enter-active {
  animation: opacity .5s;
}
.opacity-leave-active {
  animation: opacity .5s reverse;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>