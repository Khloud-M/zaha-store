<template>
  <section class="all_products">
    <landing-page />
    <div class="container-fluid">
      <div class="row d-flex">
        <product-filter class="col-lg-3"> </product-filter>
        <PorductItem class="col-lg-9" />
      </div>
    </div>
  </section>
</template>
<script>
import productFilter from "@/components/Products/productFilter.vue";
import PorductItem from "@/components/Products/PorductItem.vue";
export default {
  components: {
    productFilter,
    PorductItem,
  
  },
};
</script>
 