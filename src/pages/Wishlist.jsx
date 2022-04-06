import React from 'react'
import { WishlistCard } from '../components'

export const Wishlist = () => {
    return (
        <main className="flex-column flex-center">
            <h1 className="txt-center m-m">My Wishlist</h1>
            <div className="card-container br-s">
                <WishlistCard />
            </div>
        </main>
    )
}
