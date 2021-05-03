<template>
  <section>
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
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
// Import custom component to display only few elements
import componentsToDisplay from "@/components/pagination_item_component";

// Setup this vue
export default {
  components: {
    componentsToDisplay
  },
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
.title {
  max-width: 90rem;
  height: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 0;
  margin: 1rem auto;
  background-color: rgba(255, 89, 91 ,0.2);
  border-radius: 1rem;
}
.title * {
  margin: auto;
  font-size: 2rem;
}
.elements {
  max-width: 90rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 2rem;
  column-gap: 2rem;
  justify-content: space-between;
}
.item{
  height: 100%;
  width: fit-content;
  max-width: 25rem;
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

@media (max-width: 1000px) {
  .elements {
    grid-template-columns: repeat(2, auto);
  }
  .item:last-child,
  .item:nth-last-child(2):nth-child(odd){
    max-width: none;
    grid-column-end: span 2;
  }
}

@media (max-width: 670px) {
  .elements {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }
}
</style>