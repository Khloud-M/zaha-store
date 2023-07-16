export default {
  decrementQty(state, payload) {
      payload.qty -=1;
      if(payload.qty <= 1)
      {
        payload.qty =  1;
      }
     },
     increaseQty(state, payload) {
      payload.qty+=1;
     },
  changeAuthpage(state, payload) {
    state.pageChangeAuth = payload;
  },

  addCart(state, payload) {
    state.cart.push({
      product: payload.product,
      qty: payload.qty,
    });
  },
  removeItem(state, payload) {
    let removeItem = state.cart.indexOf((item) => item.id === payload.id);
    if (removeItem) {
      state.cart.splice(removeItem, 1);
    }
  },
};
