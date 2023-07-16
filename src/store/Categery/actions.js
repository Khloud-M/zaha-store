export default {
    increaseItem(context) {
      setTimeout(function () {
        context.commit("increaseItem");
      }, 2000);
    },
  
    addToCart(context, payload) {
      if (payload) {
        const cartItem = context.state.cart.find(
          (item) => item.product.id === payload.product.id
        );
        if (!cartItem) {
          context.commit("addCart", payload);
        } else {
          cartItem.qty += payload.qty;
        }
      }
    },
  };
  