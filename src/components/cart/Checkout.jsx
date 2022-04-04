import React from 'react';
import { useCart } from '../../context/CartContext';

export const Checkout = () => {
    const { cartState } = useCart();
    const { cartItems, cartPrice, cartArr } = cartState;
    return (
        <>
            {cartItems ? <div className="p-s m-s br-s price-details">
                <div className="b-bottom p-xs fw-semibold">
                    Price Details
                </div>
                <div className="flex-row flex-space-between flex-align-center p-xs">
                    <div>Price ({cartItems} {cartItems > 1 ? "items" : "item"})</div>
                    <div className="flex-center flex">
                        <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                            alt="weth currency" className="currency-img" />
                        <div>&nbsp;{cartPrice}</div>
                    </div>
                </div>

                <div className="flex-row flex-space-between flex-align-center p-xs">
                    <div>Discount</div>
                    <div className="flex-center flex">
                        <span>-&nbsp;</span>
                        <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                            alt="weth currency" className="currency-img" />
                        <div>&nbsp;1501.96</div>
                    </div>

                </div>

                <div className="flex-row flex-space-between flex-align-center p-xs b-bottom">
                    <div>Delivery Charges</div>
                    <div className="flex-center flex">
                        <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                            alt="weth currency" className="currency-img" />
                        <div>&nbsp;50.98</div>
                    </div>
                </div>
                <div className="flex-row flex-space-between flex-align-center p-xs fw-semibold">
                    <div>Total Amount</div>
                    <div className="flex-center flex">
                        <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                            alt="weth currency" className="currency-img" />
                        <div>&nbsp;{(cartPrice - 1501.96 + 50.98).toFixed(2)}</div>
                    </div>
                </div>

                <div className="b-top p-xs">You will save $1,501.96 on this order.</div>
                <div className="flex flex-center">
                    <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                        Place Order
                    </button>
                </div>

            </div> :
                <div> Uh Oh! The cart is empty! Add some items! </div>
            }
        </>
    )
}
