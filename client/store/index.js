export const state = () => ({
  // State
  cart: [],
  cartLength: 0
});

export const actions = {
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.cart.find(prod => prod._id === product._id);

    if (!cartProduct) {
      commit("pushProductToCart", product);
    } else {
      commit("incrementProductQty", product);
    }

    commit("incrementCartLength");
  }
};
