<template>
  <div class="cart_item" v-for="item in cart" :key="item.id">
    <div class="row mt-2 p-2 cart-row">
      <div class="col-lg-4 bg-primary">
        <!-- {{ item.prodcut.img }} -->
      </div>
      <!-- image -->
      <div class="col-lg-5 cart-details">
        <div>{{ cart[0].product.itemName }}</div>
        <div>{{ cart[0].product.quantity }}</div>

        <!-- Start cart Name -->
        <div class="rates d-flex">
          <div v-for="rate in cart[0].product.rate" :key="rate">
            <img src="../../assets/image/iconstar.jpg" alt="" />
          </div>
          <div v-for="rate in 5 - cart[0].product.rate" :key="rate">
            <img src="../../assets//image/heart1.png" alt="" />
          </div>
        </div>

        <!--  End cart rates -->
        <quntity-prod :item="item" :quantity="quantity"></quntity-prod>
        <!-- end cart Quntity -->
        <p>number of Same Item is : {{ item.qty }}</p>
      </div>
      <!-- details -->
      <div class="col-lg-2">
        <img
          src="../../assets/image/delet.png"
          alt="delet_item"
          width="20"
          height="20"
          @click="removeItem"
        />
      </div>
      <!--  delet item -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters["Categery/cart"];
    },
  },
};
</script>

<style>
.rates {
  display: flex;
  gap: 6px;
}
.rates img {
  height: 15px;
  width: 15px;
}
.cart-row {
  border: 1px solid var(--border_clr);
  gap: 2px;

}
.cart-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart-details div {
  margin-bottom: 8px;
}
.cart-details :first-child {
  color: var(--main_theme_clr);
  font-size: 20px;
}
a,
.Check {
  display: block;
  margin: 10px auto;
}
</style>