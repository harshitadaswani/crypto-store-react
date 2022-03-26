import React from 'react';
import Filter from './Filter';
import Product from './Product';

export const Products = () => {
    return (
        <div className='container'>
            <Filter />
            <main>
                <Product />
            </main>
        </div>

    )
}
