<template>
  <section>
    <h1>{{ title }}</h1>
    <transition-group
      name="opacity"
      tag="div"
      class="elements"
    >
      <componentsToDisplay
        v-for="element in elementsToDisplay"
        :key="element.index"
        :data="element"
        :type="componentType"
        :visible-time="element.index * timeBetweenEachAnimation"
        class="item"
      />
    </transition-group>
  </section>
</template>

<script>
// Import library to manage randing when screen change size
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

// Import custom component to display only few elements
import componentsToDisplay from "@/components/pagination_item_component";

// Setup this vue
export default {
  components: {
    componentsToDisplay
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  layout: 'pagination',
  props: {
    title: {
      type: String,
      default: ""
    },
    listOfElements: {
      type: Array,
      default: null
    },
    visibleItemsPerPage: {
      type: Number,
      default: 1
    },
    componentType: {
      type: String,
      default: 'default'
    },
    timeBetweenEachAnimation: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      elementsToDisplay : this.createIndex(this.listOfElements),
      // Timer to load next item
      nextLoad: 0
    }
  },

  // Methods available
  methods: {
    createIndex(array){
      let output = [...array];
      for (let i=0; i<output.length; i++)
        output[i]['index'] = i;
      return output;
    }
  }
}
</script>

<style scoped>
@media (min-width: 1200px) {
  .item {
    max-width: calc(100% / 3);
  }
}
h1 {
  padding: 2rem 0;
  font-size: 2rem;
  text-transform: uppercase;
}
.elements {
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
}
.item{
  background-color: rgba(0,0,0,0.1);
  padding: 2rem;
  margin: 2em auto 0;
}
/* ANIMATION */
.opacity-enter-active {
  animation: opacity .5s;
}
.opacity-leave-active {
  animation: opacity .25s reverse;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>