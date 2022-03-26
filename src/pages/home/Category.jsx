import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const Category = () => {
    const [loader, setLoader] = useState(true);
    const [category, setCategory] = useState([]);

    const getCategory = async () => {
        try {
            const response = await axios.get("/api/categories");
            setLoader(false);
            setCategory(response.data.categories);
        }
        catch (err) {
            setLoader(false);
            console.error(err);
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <section>
            <h2 className="content-fluid m-auto p-s">Every Industry can benefit from NFT</h2>

            <p className="p-s content m-auto">Our ready-made NFT platform is the place where art becomes unique for traders and
                creators. It brings together collectors and creators, allowing them.</p>
            <div className="category-container">
                {loader && <div> Loading </div>}
                {category.map(({ categoryName, _id, categoryImage }) => (

                    <div className="category p-l m-l br-m" key={_id}>
                        <a href="https://" className="p-s m-s">
                            <img src={categoryImage} className="p-xl" alt={ categoryName } />
                            <div className="txt-center">
                                {categoryName}
                            </div>
                        </a>
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default Category
