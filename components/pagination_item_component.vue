<template>
  <div
    v-show="visible"
    class="animation"
  >
    <component
      :is="component"
      v-if="component"
      :data="data"
    />
  </div>
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
        });
  },
  created() {
    setTimeout(() => {
      this.visible = true;
    }, this.visibleTime);
  }
}
</script>

<style scoped>
.animation {
  animation: display 1s;
  opacity: 1;
}
@keyframes display {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>