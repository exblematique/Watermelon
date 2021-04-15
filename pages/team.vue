<template>
  <section>
    <h1>Ceci est l'équipe</h1>
    <div id="team">
      <Button
        :disabled="isPreviousButtonDisabled"
        @click="previousPage"
      >
        ←
      </Button>
      <member_component
        v-for="(member, index) in team"
        :key="index"
        :member="member"
      />
      <button
        :disabled="isNextButtonDisabled"
        @click="nextPage"
      >
        →
      </button>
    </div>
    <div>
      <button
        v-for="i in pageCount"
        :key="i"
        :disabled="i === currentPage"
        @click="pageChangeHandle(i)"
      >
        {{ i }}
      </button>
    </div>
  </section>
</template>

<script>
// Import custom component to display one member
import member_component from "@/components/member_component";

// Import list of member and setting background picture
import teamMembers from '@/database/teamMembers.json';
for (let i=0; i<teamMembers.length; i++)
  teamMembers[i].style = "background-image: url('/team/" + teamMembers[i].img + "');";

// Setup this vue
export default {
  name: "Team",
  static: {
    visibleItemsPerPage: 1
  },
  components: {
    member_component
  },
  data() {
    return {
      team : [],
      currentPage: 1,
      // Number of pages available to display
      pageCount: Math.ceil(
          (teamMembers.length + this.$options.static.visibleItemsPerPage - 1) / this.$options.static.visibleItemsPerPage
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
    for (let i=0; i<this.$options.static.visibleItemsPerPage; i++)
      this.team.push(
          teamMembers[i]
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
      this.team = [];
      const startIndex = (this.currentPage - 1) * this.$options.static.visibleItemsPerPage;
      for (let i=0; i<this.$options.static.visibleItemsPerPage; i++)
        this.team.push(
            teamMembers[startIndex + i]
        );
    },
    nextPage() {
      this.pageChangeHandle('next');
    },
    previousPage() {
      this.pageChangeHandle('previous')
    }
  }

  // Create functions to disable buttons
}
</script>

<style scoped>
#team {
  width: 100%;
  height: 500px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
button {
  height: 100px;
  width: 100px;
}
</style>