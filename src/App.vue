<template>
  <nav>
    <v-container>
      <TheHeader/>
      <router-view/>

    </v-container>
  </nav>
  <router-view/>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
export default{
  components:{
    TheHeader,
  }

}
</script>
<style lang="scss">

</style>
