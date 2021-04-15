<template>
  <section>
    <h1>Ceci est l'équipe</h1>
    <div>
      <member_component
        v-for="(member, index) in team"
        :key="index"
        :member="member"
      />
    </div>
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

<style scoped>
section > div {
  width: 100%;
  height: 500px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>