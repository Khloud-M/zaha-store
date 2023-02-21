<template>
  <div>
       <TheSlider/>
       <ChooseCategery/>
       <imageSale/>
       <section class="bestSaller">
        <h3>BEST SELLERS</h3>
       </section>
  </div>
</template>

<script>
import TheSlider from "@/components/Home/TheSlider.vue"
import ChooseCategery from '@/components/ChooseCategery.vue';
import imageSale from '@/components/Home/imageSale';

export default {
  components:{
    TheSlider,
    ChooseCategery,
    imageSale,
  }
}
</script>
