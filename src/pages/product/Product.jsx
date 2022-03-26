import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";

const Product = () => {

    const [item, setItem] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("/api/products");
            setItem(response.data.products);
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div class="card-container br-s">
            {item.map(({ _id, title, author, price, categoryName, categoryImage }) => {
                return <div className="card p-xs m-xs br-s" key={_id}>
                    <div className="card-img relative">
                        <img src={categoryImage} alt={title} className="br-s img-responsive" />
                        <AiFillHeart className="wishlist-btn br-full" size={35} />

                    </div>
                    <div className="card-content flex-column flex-center">
                        <div className="p-xs fw-bold txt-center txt-m">
                            {title}
                        </div>
                        <div className="p-xs fw-semibold txt-center">Category: {categoryName}</div>
                        <div className="p-xs fw-semibold txt-center">Author: {author}</div>
                        <h4>Top Bid</h4>
                        <div className="price flex-row flex-center">
                            <img src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="weth currency" className="currency-img" />
                            <div>{price}</div>
                        </div>
                        <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                            Place Bid
                        </button>
                    </div>
                </div>

            })}
        </div>
    )
}

export default Product;
