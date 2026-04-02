import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Laptops from "./pages/Laptops";
import Cart from "./pages/Cart";
import LaptopDetails from "./pages/LaptopDetails";
import Success from "./pages/Success";


const App = () => {
  return (
    <>
      <Navbar />

     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/laptops" element={<Laptops />} />
  <Route path="/laptop/:id" element={<LaptopDetails />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/success" element={<Success />} />
</Routes>

    </>
  );
};

export default App;
