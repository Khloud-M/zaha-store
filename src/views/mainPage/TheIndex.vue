<template>
  <div>
       <TheSlider/>
       <ChooseCategery/>
       <imageSale/>
       <section class="bestSaller">
        <h3>BEST SELLERS</h3>
        <product-item/>
       </section>
       <imageSale2 />
       <section class="recommend">
        <h3>RECOMMENDED PRODUCTS</h3>
        <product-item/>
       </section>
  </div>
</template>

<script>
import TheSlider from "@/components/Home/TheSlider.vue"
import ChooseCategery from '@/components/ChooseCategery.vue';
import imageSale from '@/components/Home/imageSale';
import imageSale2 from '@/components/Home/imageSale2';



export default {
  components:{
    TheSlider,
    ChooseCategery,
    imageSale,
    imageSale2,
  }
}
</script>
<style scoped>
  @media (max-width: 480px) {
      h3{
        font-size: 20px;
      }
    }
</style>
