import React from "react";
import { Cart, Home, Login, Products, Signup } from "../pages";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
    return (
        <div className="AppRouter">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default AppRouter;
