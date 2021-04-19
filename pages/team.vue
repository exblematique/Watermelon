<template>
  <section>
    <h1>Ceci est l'équipe</h1>
    <pagination_component
      :list-of-elements="$options.static.items"
      :visible-items-per-page="$options.static.visibleItemsPerPage"
      :component-type="$options.static.componentType"
    />
  </section>
</template>

<script>// Import custom component to display pagination
import pagination_component from "@/components/pagination_component";

// Import list of member and setting background picture
import teamMembers from '@/database/teamMembers.json';
for (let i=0; i<teamMembers.length; i++)
  teamMembers[i].style = "background-image: url('/team/" + teamMembers[i].img + "');";

// Setup this vue
export default {
  name: "Team",
  static: {
    items: teamMembers,
    visibleItemsPerPage: 1,
    componentType: 'member_of_team'
  },
  components: {
    pagination_component
  }
}
</script>

<style scoped>
</style>