import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { initialWishlist, wishlistReducer } from '../reducer/WishlistReducer';

const defaultWishlist = {};

const WishlistContext = createContext(defaultWishlist);

export const WishlistProvider = ({ children }) => {

    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialWishlist);

    return (
        <WishlistContext.Provider value={{ wishlistDispatch, wishlistState }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext);
