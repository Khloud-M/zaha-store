<template>
  <nav>
    <v-container>
      <TheHeader/>
      <router-view/>
      <choose-categery/>
    </v-container>
  </nav>
  <router-view/>
</template>
<script>
// import BaseButton from "@/components/ui/BaseButton.vue"
import TheHeader from './components/layout/TheHeader.vue';
import ChooseCategery from './components/ChooseCategery.vue';
export default{
  components:{
    TheHeader,
    // BaseButton,
    ChooseCategery
  }

}
</script>
<style lang="scss">

</style>
