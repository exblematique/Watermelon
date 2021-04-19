<template>
  <div id="view">
    <div id="elements">
      <Button
        :disabled="isPreviousButtonDisabled"
        @click="previousPage"
      >
        ←
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
        →
      </button>
    </div>
    <div id="pagination">
      <button
        v-for="i in pageCount"
        :key="i"
        :disabled="i === currentPage"
        @click="pageChangeHandle(i)"
      >
        {{ i }}
      </button>
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
      pageCount: Math.ceil(
          (this.listOfElements.length + this.visibleItemsPerPage - 1) / this.visibleItemsPerPage
      )
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
      for (let i=0; i<this.visibleItemsPerPage; i++)
        this.elementsToDisplay.push(
            this.listOfElements[startIndex + i]
        );
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
  height: 100px;
  width: 100px;
}
</style>