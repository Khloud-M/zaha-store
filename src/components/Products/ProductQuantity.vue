<template>
  <div class="quanty d-flex gap-3">
    <button @click="decrementQty()">-</button>
    <span>{{ selectedItem.qty }}</span>
    <button @click="increaseQty" :disabled="selectedItem.qty >= selectedItem.quantity">
      +
    </button> 
    </div>

</template>
  <script>
export default {
  props: [ "selectedItem" ],
  methods: {
    decrementQty() {
      this.$store.commit("Categery/decrementQty", this.selectedItem);
    },
    increaseQty() {
      this.$store.commit("Categery/increaseQty", this.selectedItem);
    },
  },
};
</script>
  <style scoped>
.quanty {
  width: 150px;
  justify-content: space-between;
  font-size: 25px;
  border: 1px solid var(--border_clr);
  border-radius: 10px;
  padding: 8px;
}
.quanty button {
  border: none;
  background-color: white;
  width: 30%;
}
</style>