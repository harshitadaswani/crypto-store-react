import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useFilter } from '../../context/FilterContext';
import { HIGH_TO_LOW, LOW_TO_HIGH } from '../../reducer/FilterReducer';

const Filter = () => {

    const { dispatch, state } = useFilter();

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
                <div className="txt-underline txt-cursor m-xs" onClick={() => dispatch({ type: "RESET_FILTER" })}>Clear</div>
            </div>
            <div className="p-xs m-xs">
                <div className="fw-bold txt-m">Price</div>
                <div className="flex-row flex-space-between m-s nowrap">
                    <span>1000</span>
                    <span>5000</span>
                    <span>10000</span>
                </div>
                <div className="slidecontainer txt-cursor m-xs">
                    <input type="range" min="1000" max="10000" className="slider" id="myRange" onChange={(e) => {
                        dispatch({
                            type: "RANGE_FILTER",
                            payload: { value: e.target.value },
                        });
                    }} value={state.priceRange} />
                </div>
            </div>

            <div className="p-xs m-xs flex-column">
                <div className="fw-bold txt-m">Category</div>

                {category.map(({ categoryName, _id, categoryId }) => (
                    <div className="p-xs" key={_id}>
                        <input type="checkbox" name={categoryName} className="p-xs m-xs" value={state.category[categoryId]}
                            onClick={() =>
                                dispatch({
                                    type: "CATEGORY_FILTER",
                                    payload: categoryId,
                                })
                            } />
                        <label htmlFor={categoryName}>{categoryName}</label>
                    </div>
                ))
                }
            </div>

            <div className="p-xs m-xs flex-column">
                <div className="fw-bold txt-m">Rating</div>
                {[4, 3, 2, 1].map((item) => <div className="p-xs" key={item}>
                    <input type="radio" name="Rating" className="p-xs m-xs" value={state.rating === item} onClick={() => {
                        dispatch({ type: "RATING_FILTER", payload: item });
                    }} />
                    <label htmlFor="Rating">{item} ⭐ & more</label>
                </div>)}
            </div>

            <div className="p-xs m-xs flex-column">
                <div className="fw-bold txt-m">Sorting</div>
                <div className="p-xs">
                    <input type="radio" name="Sorting" className="p-xs m-xs" id={LOW_TO_HIGH} value={state.lowToHigh}
                        onClick={() => dispatch({ type: LOW_TO_HIGH })} />
                    <label htmlFor={LOW_TO_HIGH}>Price: Low to High</label>
                </div>
                <div className="p-xs">
                    <input type="radio" name="Sorting" className="p-xs m-xs" id={HIGH_TO_LOW} value={state.highTolow}
                        onClick={() => dispatch({ type: HIGH_TO_LOW })} />
                    <label htmlFor={HIGH_TO_LOW}>Price: High to Low</label>
                </div>
            </div>
        </aside>
    )
}

export { Filter };
