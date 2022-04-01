import React from 'react';
import { createContext, useContext, useEffect, useState, useReducer } from "react";
import { priceSort, categoryFilter, ratingFilter, rangeFilter } from '../utils/FilterFunctions';
import { filterReducer, initialState } from '../reducer/FilterReducer';
import axios from "axios";

const defaultValue = {};

const FilterContext = createContext(defaultValue);

const FilterProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const { data } = await axios.get("/api/products");
            setProducts(data.products);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const [state, dispatch] = useReducer(filterReducer, initialState);

    const compose = (...filterFunctions) => (state, data) => filterFunctions.reduce(
        (newData, filterFunctions) => filterFunctions(state, newData),
        data
    );

    const filteredItems = compose(priceSort, categoryFilter, rangeFilter, ratingFilter)(state, products);

    return (
        <FilterContext.Provider value={{ filteredItems, dispatch, state }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
