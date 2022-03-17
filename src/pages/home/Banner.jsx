import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <main>
                <section className="crypto-flex">
                    <div className="img-container">
                        <img src="./assets/image1.png" alt="NFT banner" />
                    </div>

                    <div className="content-container">
                        <h1 className="p-xs m-xs">The Largest N F T MarketPlace</h1>

                        <p className="m-xs p-xs">
                            Welcome to the biggest NFT marketplace in the digital arts industry. Here you can find rare
                            collectibles for all kinds of artwork made by talented.
                        </p>

                        <p className="m-xs p-xs">
                            Creators from all across the globe. Whether you are interested in digital art, photography or unique
                            mixed media, you can find it here.
                        </p>

                        <div className="txt-center">
                            <button className="btn">
                                Learn More &nbsp;
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Banner
