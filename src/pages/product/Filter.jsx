import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const Filter = () => {
    const [category, setCategory] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("/api/categories");
            setCategory(response.data.categories);
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <aside className="border-right">
            <div className="flex-row flex-space-between p-xs m-xs">
                <div className="fw-bold txt-m">Filters</div>
                <div className="txt-underline txt-cursor m-xs">Clear</div>
            </div>
            <div className="p-xs m-xs">
                <div className="fw-bold txt-m">Price</div>
                <div className="flex-row flex-space-between m-s nowrap">
                    <span>100</span>
                    <span>150</span>
                    <span>200</span>

                </div>
                <div className="slidecontainer txt-cursor m-xs">
                    <input type="range" min="100" max="200" value="150" className="slider" id="myRange" />
                </div>
            </div>

            <div className="p-xs m-xs flex-column">
                <div className="fw-bold txt-m">Category</div>

                {category.map(({ categoryName, _id }) => (
                    <div>
                        <div className="p-xs" key={_id}>
                            <input type="checkbox" name={categoryName} className="p-xs m-xs" />
                            <label for={categoryName}>{categoryName}</label>
                        </div>
                    </div>
                ))
                }


            </div>

            <div className="p-xs m-xs flex-column">
                <div className="fw-bold txt-m">Rating</div>
                {[4, 3, 2, 1].map((item) => <div className="p-xs">
                    <input type="radio" name="Rating" className="p-xs m-xs" />
                    <label for="Rating">{item} ⭐ & more</label>
                </div>)}
            </div>

            <div className="p-xs m-xs flex-column">
                <div className="fw-bold txt-m">Sorting</div>
                <div className="p-xs">
                    <input type="radio" name="Sorting" className="p-xs m-xs" />
                    <label for="Sorting">Price: Low to High</label>
                </div>
                <div className="p-xs">
                    <input type="radio" name="Sorting" className="p-xs m-xs" />
                    <label for="Sorting">Price: High to Low</label>
                </div>
            </div>
        </aside>
    )
}

export default Filter;
