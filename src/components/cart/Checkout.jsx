import React from 'react'

export const Checkout = () => {
    return (
        <div class="p-s m-s br-s price-details">
            <div class="b-bottom p-xs fw-semibold">
                Price Details
            </div>
            <div class="flex-row flex-space-between flex-align-center p-xs">
                <div>Price (1 item)</div>
                <div class="flex-center flex">
                    <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                        alt="weth currency" class="currency-img" />
                    <div>&nbsp;0.5098</div>
                </div>
            </div>

            <div class="flex-row flex-space-between flex-align-center p-xs">
                <div>Discount</div>
                <div class="flex-center flex">
                    <span>-&nbsp;</span>
                    <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                        alt="weth currency" class="currency-img" />
                    <div>&nbsp;0.5098</div>
                </div>

            </div>

            <div class="flex-row flex-space-between flex-align-center p-xs b-bottom">
                <div>Delivery Charges</div>
                <div class="flex-center flex">
                    <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                        alt="weth currency" class="currency-img" />
                    <div>&nbsp;0.5098</div>
                </div>
            </div>
            <div class="flex-row flex-space-between flex-align-center p-xs fw-semibold">
                <div>Total Amount</div>
                <div class="flex-center flex">
                    <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg"
                        alt="weth currency" class="currency-img" />
                    <div>&nbsp;0.5098</div>
                </div>
            </div>

            <div class="b-top p-xs">You will save $1,501.96 on this order.</div>
            <div class="flex flex-center">
                <button class="bid-btn br-s p-s m-xs fw-semibold txt-s">
                    Place Order
                </button>
            </div>

        </div>
    )
}
