import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { initialCartState, cartReducer } from '../reducer/CartReducer';

const defaultCartValue = {};

const CartContext = createContext(defaultCartValue);

export const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider value={{ cartDispatch, cartState }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
