import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { REMOVE_FROM_WISHLIST } from '../../reducer/WishlistReducer';
import { ADD_TO_CART } from '../../reducer/CartReducer';

export const WishlistCard = () => {

    const { wishlistState, wishlistDispatch } = useWishlist();
    const { cartDispatch } = useCart();

    return (
        <>
            {wishlistState.wishlist.length !== 0 ? wishlistState.wishlist.map((product) => {
                const { _id, title, price, productImage } = product;
                return (
                    <div className="card p-xs m-xs br-s" key={_id}>
                        <div className="card-img relative">
                            <img src={productImage} alt={title} className="br-s img-responsive" />
                            <AiFillHeart size={37} className="fas fa-heart wishlist-btn color-red br-full" onClick={() => wishlistDispatch({ type: REMOVE_FROM_WISHLIST, payload: product })}></AiFillHeart>
                        </div>
                        <div className="card-content flex-column flex-center">
                            <div className="m-xs p-xs fw-bold txt-center">
                                {title}
                            </div>
                            <h4>Top Bid</h4>
                            <div className="price flex-row flex-center">
                                <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="weth currency" className="currency-img" />
                                <div>{price}</div>
                            </div>
                            <button className="bid-btn br-s p-s m-xs fw-semibold txt-s" onClick={() => {
                                cartDispatch({
                                    type: ADD_TO_CART,
                                    payload: product
                                });
                                wishlistDispatch({
                                    type: REMOVE_FROM_WISHLIST,
                                    payload: product
                                });
                            }
                            } >
                                Move to Cart
                            </button>
                        </div>
                    </div>
                )
            }) : <div>UH OH!! The wishlist is empty! Favourite some items!</div>}
        </>
    )
}
