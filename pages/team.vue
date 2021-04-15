<template>
  <section>
    <h1>Ceci est l'équipe</h1>
    <member_component
      v-for="(member, index) in team"
      :key="index"
      :member="member"
    />
  </section>
</template>

<script>
// Import custom component to display one member
import member_component from "@/components/member_component";

// Import list of member and setting background picture
import team from '@/database/teamMembers.json';
for (let i=0; i<team.length; i++)
  team[i].style = "background-image: url('/team/" + team[i].img + "');";

// Setup this vue
export default {
  name: "Team",
  components: {member_component},
  data : () => {return {team : team};}
}
</script>