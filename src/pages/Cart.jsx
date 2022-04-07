import React from 'react';
import { Card, Checkout } from "../components"

export const Cart = () => {
    return (
        <main className="flex-column flex-center">
            <h1>My Cart:</h1>
            <div className="card-container flex-row br-s">
                <Card />
                <Checkout />
            </div>
        </main>
    )
}
