import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { useFilter } from '../../context/FilterContext';
import { useCart } from '../../context/CartContext';
import { ADD_TO_CART } from '../../reducer/CartReducer';
import { Link } from "react-router-dom";

const Product = () => {

    const { filteredItems } = useFilter();
    const { cartDispatch } = useCart();

    return (
        <div className="card-container br-s">
            {filteredItems.map((product) => {
                const { _id, title, author, price, categoryName, productImage, rating } = product;

                return <div className="card p-xs m-xs br-s" key={_id}>
                    <div className="card-img relative">
                        <img src={productImage} alt={title} className="br-s img-responsive" />
                        <AiFillHeart className="wishlist-btn br-full" size={35} />

                    </div>
                    <div className="card-content flex-column flex-center">
                        <div className="p-xs fw-bold txt-center txt-m">
                            {title}
                        </div>
                        <div className="p-xs fw-semibold txt-center">Category: {categoryName}</div>
                        <div className="p-xs fw-semibold txt-center">Author: {author}</div>
                        <div className="p-xs fw-semibold txt-center">Rating: {rating}⭐/ 5</div>
                        <h4>Top Bid</h4>
                        <div className="price flex-row flex-center">
                            <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="weth currency" className="currency-img" />
                            <div>{price}</div>
                        </div>

                        <button className="bid-btn br-s p-s m-xs fw-semibold txt-s" onClick={() => cartDispatch({
                            type: ADD_TO_CART,
                            payload: product,
                        })}><Link to="/cart">
                                Place Bid
                            </Link>
                        </button>


                    </div>
                </div>

            })}
        </div>
    )
}

export { Product };
