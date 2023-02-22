<template>
  <div>
       <TheSlider/>
       <ChooseCategery/>
       <imageSale/>
       <section class="bestSaller">
        <h3>BEST SELLERS</h3>
        <ProductItem/>
       </section>
       <imageSale2 />
       <section class="recommend">
        <h3>RECOMMENDED PRODUCTS</h3>
        <ProductItem/>
       </section>
  </div>
</template>

<script>
import TheSlider from "@/components/Home/TheSlider.vue"
import ChooseCategery from '@/components/ChooseCategery.vue';
import imageSale from '@/components/Home/imageSale';
import ProductItem from '@/components/PorductItem.vue';
import imageSale2 from '@/components/Home/imageSale2';



export default {
  components:{
    TheSlider,
    ChooseCategery,
    imageSale,
    ProductItem,
    imageSale2,
  }
}
</script>
