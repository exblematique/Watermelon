<template>
  <section>
    <h1>Voici les compétences que nous avons :</h1>
    <pagination_component
      :list-of-elements="$options.static.items"
      :visible-items-per-page="$options.static.visibleItemsPerPage"
    />
  </section>
</template>

<script>
// Import custom component to display pagination
import pagination_component from "@/components/pagination_component";

// Import list of member and setting background picture
import database from '@/database/abilities.json';

// Setup this vue
export default {
  name: "Abilities",
  static: {
    items: database,
    visibleItemsPerPage: 1
  },
  components: {
    pagination_component
  }
}
</script>
