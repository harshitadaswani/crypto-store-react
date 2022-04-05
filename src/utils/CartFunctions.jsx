export const isProductInCart = (state, product) => state.cartArr.find((item) => item.id === product.id);
