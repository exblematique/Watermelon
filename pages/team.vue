<template>
  <div id="team">
    <h1>Ceci est l'équipe</h1>
    <member_component
      v-for="(member, index) in team"
      :key="index"
      :member="member"
    />
  </div>
</template>

<script>
import member_component from "@/components/member_component";
export default {
  name: "Team",
  components: {member_component},
  data : () => {
    return {
      // TODO: move team information in .json file
      team: [
        {
          name: "Bouquet Xavier",
          roles: ["Président de l'association", "Monteur"],
          img: "xavier.webp"
        },{
          name: "Signaire Caroline",
          roles: ["Trésorière", "Monteuse"],
          img: "caroline.webp"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>