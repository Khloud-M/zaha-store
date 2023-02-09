<template>
  <nav>
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
