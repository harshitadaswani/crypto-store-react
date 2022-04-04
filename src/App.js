import React from "react";
import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, Products, Cart } from "./pages";
import AppRouter from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
