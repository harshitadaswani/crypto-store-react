import React from 'react';
import { Card, Checkout } from "../components"

export const Cart = () => {
    return (
        <main className="flex-column flex-center">
            <div class="card-container flex-row br-s">
                <Card />
                <Checkout />
            </div>
        </main>
    )
}
