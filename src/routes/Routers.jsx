import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "../components/Content/ProductDetails/ProductDetails";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Information from "../pages/Information";
import StoreBook from "../pages/StoreBook";
import Sucess from "../pages/Sucess";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/sucess" element={<Sucess />}></Route>
        <Route path="/store-book" element={<StoreBook />}></Route>
        <Route path="/information" element={<Information />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
