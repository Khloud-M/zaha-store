<template>
  <div>
       <TheSlider/>
       <ChooseCategery/>
       <imageSale/>
       <section class="bestSaller">
        <h3>BEST SELLERS</h3>
        <ProductItem/>
       </section>
  </div>
</template>

<script>
import TheSlider from "@/components/Home/TheSlider.vue"
import ChooseCategery from '@/components/ChooseCategery.vue';
import imageSale from '@/components/Home/imageSale';
import ProductItem from '@/components/PorductItem.vue';


export default {
  components:{
    TheSlider,
    ChooseCategery,
    imageSale,
    ProductItem,
  }
}
</script>
