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
      <empty-cart />
    </div>
  </div>
</template>
<script>
import EmptyCart from "@/components/Cart/EmptyCart.vue";
export default {
  components: {
    EmptyCart,
  },
};
</script>
