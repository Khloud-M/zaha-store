<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <v-container>
      kgloud
      <choose-categery/>
    </v-container>
  </nav>
  <router-view/>
</template>
<script>
import ChooseCategery from './components/ChooseCategery.vue';
export default{
  components:{
    ChooseCategery
  }

}
</script>
<style lang="scss">

</style>
