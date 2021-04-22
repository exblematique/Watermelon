<template>
  <div id="view">
    <div id="elements">
      <Button
        :disabled="isPreviousButtonDisabled"
        @click="previousPage"
      >
        &#60;
      </Button>
      <componentsToDisplay
        v-for="(element, index) in elementsToDisplay"
        :key="index"
        :data="element"
        :type="componentType"
      />
      <button
        :disabled="isNextButtonDisabled"
        @click="nextPage"
      >
        &#62;
      </button>
    </div>
    <div id="pagination">
      <button
        v-for="i in pageCount"
        :key="i"
        :disabled="i === currentPage"
        @click="pageChangeHandle(i)"
      />
    </div>
  </div>
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
    }
  },
  data() {
    return {
      elementsToDisplay : [],
      currentPage: 1,
      // Number of element to display according to width
      currentVisibleItemsPerPage: 1,
      // Number of pages available to display
      pageCount: 1
    }
  },
  // Create functions to disable buttons
  computed:{
    isPreviousButtonDisabled() {
      return this.currentPage === 1
    },
    isNextButtonDisabled() {
      return this.currentPage === this.pageCount
    }
  },

  // Call this function when page is call for the first time
  async mounted(){
    this.vssEvent = this.test;
    this.updateSizeAndRender();

    //TODO TEST
    console.log(this.$vssEvent)
  },

  // Setup event when this component is created
  created() {
    //TODO TEST
    console.log(this.$vssEvent)
    //this.$vssEvent.on('resize', this.updateSizeAndRender);
  },

  // Methods available
  methods: {
    //TODO TEST
    test(){
      console.log("TESSSSSSSSSSST");
    },
    /*vssEvent($vssEvent){
      this.updateSize();
      this.renderVue();
    },*/

    // Update size of program
    updateSizeAndRender(){
      // Calculate quantity of elements in page
      // According to some tests that I made
      // If negative or null, only 1 element can be display
      let maxItemsWithSize = Math.ceil((this.$vssWidth - 1100)/300) + 1;
      if (maxItemsWithSize < 1)
        maxItemsWithSize = 1;

      //Then update values
      this.currentVisibleItemsPerPage = Math.min(maxItemsWithSize, this.visibleItemsPerPage);
      this.pageCount = Math.ceil(this.listOfElements.length / this.currentVisibleItemsPerPage);

      //Then render vue
      this.renderVue()
    },
    // To render a vue
    renderVue(){
      // Retrieve information from database
      // And send to display
      this.elementsToDisplay = [];
      const startIndex = (this.currentPage - 1) * this.currentVisibleItemsPerPage;
      for (let i=0; i<this.currentVisibleItemsPerPage; i++){
        //Check if the element exists in array
        if (startIndex+i < this.listOfElements.length)
          this.elementsToDisplay.push(
              this.listOfElements[startIndex + i]
          );
      }
    },
    // To change page
    pageChangeHandle (value){
      switch (value) {
        case 'next':
          this.currentPage++;
          break;
        case 'previous':
          this.currentPage--;
          break;
        default:
          this.currentPage = parseInt(value);
      }
      this.renderVue();
    },
    nextPage() {
      this.pageChangeHandle('next');
    },
    previousPage() {
      this.pageChangeHandle('previous')
    }
  }
}
</script>

<style scoped>
#pagination{
  height: auto;
  margin-bottom: 25px;
}
#view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#elements {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

button {
  /* To prevent changing button size */
  flex-shrink: 0;
  border-radius: 50%;
  background-color: rgba(169, 169, 169, 0.4);
  cursor: pointer;
}

button:disabled{
  cursor: default;
}

#elements button{
  height: 100px;
  width: 100px;
  border: 5px solid white;
  color: white;
  font-weight: bold;
  font-size: x-large;
}

#elements button:disabled {
  color: darkgrey;
  border-color: darkgrey;
}

#pagination button {
  height: 20px;
  width: 20px;
  margin: 0 10px;
  border: 2px solid white;
}

#pagination button:disabled {
  background: white;
}
</style>