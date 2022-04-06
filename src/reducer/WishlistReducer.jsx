import { isProductInWishlist } from "../utils/WishlistFunctions";

export const initialWishlist = {
    wishlist: [],
}

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_TO_WISHLIST";

export const wishlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_WISHLIST:
            return isProductInWishlist(state, payload) ? state : { ...state, wishlist: [...state.wishlist, payload] }

        case REMOVE_FROM_WISHLIST:
            return { ...state, wishlist: state.wishlist.filter((item) => item.id !== payload.id) }

        default:
            return state;
    }
}