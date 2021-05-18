<template>
  <section>
    <div class="title bgColor">
      <img
        :src="'/title_svg/'+name+'.svg'"
        :alt="title"
      />
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
        :class="{lastOddItem: element.index === $data.lastOddItem}"
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
    name:{
      type: String,
      default: ""
    },
    //TODO Check if title is used
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
      default: 250
    }
  },

  data() {
    return {
      elementsToDisplay : this.createIndex(this.listOfElements),
      // Timer to load next item
      nextLoad: 0,
      lastOddItem: -1
    }
  },
  beforeMount() {
    if (this.elementsToDisplay.length % 2 === 1)
      this.lastOddItem = this.elementsToDisplay.length - 1;
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
.title > img {
  height: 100%;
  width: auto;
  filter: drop-shadow(0 0 2px #ff595b);
}

.title {
  max-width: 90rem;
  height: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 0;
  margin: 2rem auto;
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
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  justify-content: space-between;
}
.item{
  height: 100%;
  width: fit-content;
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

@media (min-width: 670px) and (max-width: 1000px) {
  .elements {
    grid-template-columns: 1fr 1fr;
  }
  .lastOddItem{
    grid-column-end: span 2;
  }
}

@media (max-width: 669px) {
  .elements {
    grid-template-columns: 1fr;
  }
}
</style>