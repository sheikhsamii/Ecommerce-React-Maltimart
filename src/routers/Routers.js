import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import ProductDetails from "../pages/ProductDetails";
// import Shop from "../pages/Shop";
// import Signup from "../pages/Signup";
// import { cartActions } from "../redux/slices/ProductSlice";
// import { useDispatch } from "react-redux";
// import products from "../assets/data/products";
import ProductsList from "../Components/UI/ProductsList";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";

const Routers = () => {
  // const dispatch = useDispatch();
  // dispatch(cartActions.setProducts(products));
  // console.log(products);
  return (
    <>
      <Routes>
        <Route path="/home" element={<ProductsList />} />
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Routers;

/* <Route path="shop/:id" element={<ProductDetails />} /> */
/* <Route path="checkout" element={<Checkout />} /> */
/* <Route path="login" element={<Login />} /> */
/* <Route path="signup" element={<Signup />} /> */
