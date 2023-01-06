import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    reduceStock: (state, action) => {
      const index = state.products.findIndex((el) => el.id === action.payload);
      state.products[index].stock -= 1;
      //  const product = [...state.products]
      //  const updated = product[index].stock - 1
    },
    IncreaseStock: (state, action) => {
      const index = state.products.findIndex((el) => el.id === action.payload);
      state.products[index].stock += 1;
      //  const product = [...state.products]
      //  const updated = product[index].stock - 1
    },
  },
});

export const productActions = ProductSlice.actions;

export default ProductSlice.reducer;

//24:00
