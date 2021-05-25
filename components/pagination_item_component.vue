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
      component: () => import(`@/components/pagination_elements/${this.type}`),
      //Start in visible when script are disabled
      visible: true
    }
  },
  // When page is mounted
  // Load the corresponding component
  // Then create timer to display each element
  mounted() {
    this.visible = false;
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