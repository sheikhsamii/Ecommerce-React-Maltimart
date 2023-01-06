import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import productSlice from "./slices/ProductSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: CartSlice,
  },
});
