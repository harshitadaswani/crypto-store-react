import { isProductInCart } from "../utils/CartFunctions";

export const initialCartState = {
    cartItems: 0,
    cartPrice: 0,
    cartArr: [],
}

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_TO_CART";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

export const cartReducer = (state, action) => {
    const { type, payload } = action;
    const product = payload;
    switch (type) {
        case ADD_TO_CART:
            return isProductInCart(state, product) ? {
                ...state, cartItems: state.cartItems + 1,
                cartPrice: state.cartPrice + Number(product.price),
                cartArr: state.cartArr.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
                : {
                    ...state,
                    cartItems: state.cartItems + 1,
                    cartPrice: state.cartPrice + Number(product.price),
                    cartArr: [...state.cartArr, { ...product, quantity: 1 }],
                }

        case REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems - isProductInCart(state, product).quantity,
                cartPrice: state.cartPrice - Number((isProductInCart(state, product).price)) * (isProductInCart(state, product).quantity),
                cartArr: state.cartArr.filter((item) => item.id !== product.id)
            }

        case DECREMENT_ITEM:
            return isProductInCart(state, product) ? isProductInCart(state, product).quantity > 1 ? {
                ...state, cartItems: state.cartItems - 1, cartPrice: state.cartPrice - Number(product.price),
                cartArr: state.cartArr.map((item) => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item),
            } : {
                ...state,
                cartItems: state.cartItems - 1,
                cartPrice: state.cartPrice - Number(product.price),
                cartArr: state.cartArr.filter((item) => item.id !== product.id),
            }
                : {
                    ...state,
                    cartItems: state.cartItems - 1,
                    cartPrice: state.cartPrice - Number(product.price),
                    cartArr: [...state.cart],
                }
    }
}
