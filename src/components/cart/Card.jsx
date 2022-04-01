import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

export const Card = () => {
    return (
            <div className="card hori flex gap-1 flex-align-center p-xs m-xs br-s">
                <div className="card-img-hori relative">
                    <img src="https://static.live.templately.com/woocommerce/2021/07/image-1-9.jpg"
                        alt="nft card image 1" className="br-s img-responsive" />
                </div>
                <div className="card-content flex-grow flex-column flex-center">
                    <div className="m-xs p-xs fw-bold txt-center">
                        Dreams in Mocha and Latte
                    </div>
                    <h4>Top Bid</h4>
                    <div className="price flex-row flex-center">
                        <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                            alt="weth currency" className="currency-img" />
                        <div>0.5098</div>
                        <div>($1,501.96)</div>
                    </div>
                    <div className="flex-row flex-center gap-1 p-s">
                        <div>Quantity:</div>
                        <AiOutlinePlusCircle />
                        <div className="br-s border">1</div>
                        <AiOutlineMinusCircle />
                    </div>
                    <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                        Remove from Cart
                    </button>
                    <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                        Move to Wishlist
                    </button>
                </div>
            </div>
            
        
    )
}
