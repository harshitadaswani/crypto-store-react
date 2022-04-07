import React from "react";
import "./navbar.css";
import { BsHeartFill, BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";

function Navbar() {

    const { cartState } = useCart();
    const { wishlistState } = useWishlist();
    return (
        <nav className="navigation">
            <div className="nav-left">
                <Link to="/" className="txt-l fw-black p-s m-s">Crypto&nbsp;Store</Link>
            </div>

            <div className="relative">
                <input type="search" name="searchbar" className="p-s m-s input-box br-s" placeholder="Search items here" />
                <span className="input-icon">
                    <FaSearch size={22} />
                </span>
            </div>

            <div className="nav-right">
                <button className="btn btn-link m-m">
                    <Link to="/login">Login</Link>
                </button>

                <Link to="/wishlist" className="txt-m fw-black p-s m-s">
                    <div className="badge">
                        <BsHeartFill className="icons" />
                        <div className="number-badge txt-s">{wishlistState.wishlist.length}</div>
                    </div>
                </Link>

                <Link to="/cart" className="txt-m fw-black p-s m-s">
                    <div className="badge">
                        <BsCartFill className="icons" />
                        <div className="number-badge txt-s">{cartState.cartItems}</div>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export { Navbar };
