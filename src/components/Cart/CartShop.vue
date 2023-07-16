<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">My Cart</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <FillCart v-if="cart.length" /> 
      <empty-cart v-else />
    </div>
  </div>
</template>
<script>
import EmptyCart from "@/components/Cart/EmptyCart.vue";
import FillCart from "@/components/Cart/FillCart.vue";
export default {
  components: {
    EmptyCart,
    FillCart
  },
  computed: {
    cart() {
      return this.$store.getters["Categery/cart"];
    },
  },
};
</script>
<style>
.btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.20rem var(--main_theme_clr);
    opacity: 1;
}

</style>
