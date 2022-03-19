import React from "react";
import "./App.css";
import Navbar from "./components/shared/NavBar/NavBar";
import Footer from "./components/shared/footer/Footer";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
