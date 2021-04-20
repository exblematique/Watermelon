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
// Import custom component to display only few elements
import componentsToDisplay from "@/components/pagination_item_component";

// Setup this vue
export default {
  components: {
    componentsToDisplay
  },
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
      // Number of pages available to display
      pageCount: Math.ceil(this.listOfElements.length / this.visibleItemsPerPage)
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
    for (let i=0; i<this.visibleItemsPerPage; i++)
      this.elementsToDisplay.push(
          this.listOfElements[i]
      );
  },

  // Methods available
  methods: {
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

      // Retrieve information from database
      // And send to display
      this.elementsToDisplay = [];
      const startIndex = (this.currentPage - 1) * this.visibleItemsPerPage;
      for (let i=0; i<this.visibleItemsPerPage; i++){
        //Check if the element exists in array
        if (startIndex+i < this.listOfElements.length)
          this.elementsToDisplay.push(
              this.listOfElements[startIndex + i]
          );
      }
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
  margin-bottom: 100px;
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
  margin: 0 100px;
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