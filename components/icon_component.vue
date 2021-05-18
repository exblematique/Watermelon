<template>
  <a
    v-if="link"
    :href="dbIcon[icon].url + link"
  >
    <fa
      :icon="dbIcon[icon].icon"
      class="icon"
    />
  </a>
</template>

<script>
const dbIcon = {
  facebook : {
    url : 'https://www.facebook.com/',
    icon : ['fab','facebook']
  },
  website : {
    url: '',
    icon: ['fas','globe']
  },
  instagram: {
    url: 'https://www.instagram.com/',
    icon: ['fab','instagram']
  }
}
export default {
  name: "IconComponent",
  props: {
    link: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  data(){
    return {
      dbIcon: dbIcon
    }
  }
}
</script>

<style scoped>
.icon {
  width: 2rem;
  height: 2rem;
  margin: 1rem;
}
</style>