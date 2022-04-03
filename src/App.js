import React from "react";
import "./App.css";
import { Navbar, Footer } from "./components";
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
