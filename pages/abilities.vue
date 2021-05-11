<template>
  <pagination_component
    :title="'Nos compétences'"
    :name="'abilities'"
    :list-of-elements="$options.static.items"
    :visible-items-per-page="$options.static.visibleItemsPerPage"
  />
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
    visibleItemsPerPage: 3
  },
  components: {
    pagination_component
  }
}
</script>
