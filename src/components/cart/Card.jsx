import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { ADD_TO_WISHLIST } from '../../reducer/WishlistReducer';
import { ADD_TO_CART, DECREMENT_ITEM, REMOVE_FROM_CART } from '../../reducer/CartReducer';

export const Card = () => {
    const { cartState, cartDispatch } = useCart();
    const { wishlistDispatch } = useWishlist();
    return (
        <>
            {cartState.cartArr.map((product) => {
                const { _id, title, price, productImage, quantity } = product;
                return (
                    <div className="card hori flex gap-1 flex-align-center p-xs m-xs br-s" key={_id}>
                        <div className="card-img-hori relative">
                            <img src={productImage}
                                alt={title} className="br-s img-responsive" />
                        </div>
                        <div className="card-content flex-grow flex-column flex-center">
                            <div className="m-xs p-xs fw-bold txt-center">
                                {title}
                            </div>
                            <h4>Top Bid</h4>
                            <div className="price flex-row flex-center">
                                <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                                    alt="weth currency" className="currency-img" />
                                <div>{price}</div>
                            </div>
                            <div className="flex-row flex-center gap-1 p-s">
                                <div>Quantity:</div>
                                <AiOutlineMinusCircle onClick={() => cartDispatch({ type: DECREMENT_ITEM, payload: product })} />
                                <div className="br-s border">{quantity}</div>
                                <AiOutlinePlusCircle onClick={() => cartDispatch({ type: ADD_TO_CART, payload: product })} />
                            </div>
                            <button className="bid-btn br-s p-s m-xs fw-semibold txt-s" onClick={() => cartDispatch({ type: REMOVE_FROM_CART, payload: product })}>
                                Remove from Cart
                            </button>
                            <button className="bid-btn br-s p-s m-xs fw-semibold txt-s" onClick={() => {
                                wishlistDispatch({ type: ADD_TO_WISHLIST, payload: product });
                                cartDispatch({ type: REMOVE_FROM_CART, payload: product });
                            }}>
                                Move to Wishlist
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
