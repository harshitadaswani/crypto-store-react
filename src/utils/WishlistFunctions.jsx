export const isProductInWishlist = (state, product) => state.wishlist.find((item) => item.id === product.id);
