<template>
  <div>
    <div class="cart_item" v-for="item in cart" :key="item.id">
      <div class="row mt-2 p-2 cart-row">
        <div class="col-lg-4 bg-primary">
          <img :src="item.product.img" alt="image_product" width="100" />
        </div>
        <!-- image -->
        <div class="col-lg-5 cart_details">
          <div>{{ cart[0].product.itemName }}</div>
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
          <p>Quantity : {{ item.qty }}</p>
          <div>
            <span> price : </span> {{ cart[0].product.soonMoney }} X
            {{ item.qty }}
          </div>
        </div>
        <!-- details -->
        <div class="col-lg-2 image_delete">
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
    <div class="total_price">
      <h6>total price :</h6>
      <h6>{{ totalPrice }} R.S</h6>
    </div>
    <router-link to="/TheCheck" v-if="cart.length">
      <bace-button class="Check" data-bs-dismiss="offcanvas">
        Check Out</bace-button
      >
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // cost:0,
    };
  },
  computed: {
    cart() {
      return this.$store.getters["Categery/cart"];
    },
    totalPrice() {
      let cost = 0;
      const total_price = this.cart;
      cost += total_price
        .map((el) => el.product.soonMoney * el.qty)
        .reduce((acc, val) => acc + val, 0);
      return cost;
    },
  },
  methods: {
    removeItem() {
      this.$store.commit("Categery/removeItem");
    },
  },
};
</script>

<style lang="scss" scoped>
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
.cart_details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart_details div {
  margin-bottom: 8px;
}
.cart_details :first-child {
  color: var(--main_theme_clr);
  /* font-size: 20px; */
}
.image_delete {
  img:hover {
    cursor: pointer;
  }
}
.total_price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  h6 {
    color: var(--main_theme_clr);
    text-transform: capitalize;
    font-size: 20px;
  }
}
a,
.Check {
  display: block;
  width: 100% !important;
  margin: 20px auto;
}
</style>