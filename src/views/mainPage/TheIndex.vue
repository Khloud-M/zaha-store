<template>
  <div>
       <TheSlider/>
       <ChooseCategery/>
  </div>
</template>

<script>
import TheSlider from "@/components/Home/TheSlider.vue"
import ChooseCategery from '@/components/ChooseCategery.vue';

export default {
  components:{
    TheSlider,
    ChooseCategery,
  }
}
</script>
