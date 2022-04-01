import React from 'react';
import { Filter, Product } from '../components';
import { FilterProvider } from "../context/FilterContext";

export const Products = () => {
    return (
        <div className='container'>
            <FilterProvider>
                <Filter />
                <main>
                    <Product />
                </main>
            </FilterProvider>
        </div>

    )
}
