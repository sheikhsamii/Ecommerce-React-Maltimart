import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      state.cartItems = [...state.cartItems, newItem];
      const tPriceArr = state.cartItems.map((el) => el.price * el.quantity);
      const totalPrice = tPriceArr.reduce((a, b) => a + b, 0);
      state.totalAmount = totalPrice;
      state.totalQuantity++;
      toast.success("Added to Cart");
    },
    addQuantityCart: (state, action) => {
      const isProduct = state.cartItems.find(
        (item) => item.id === action.payload[0]
      );
      if (isProduct) {
        const Index = state.cartItems.findIndex(
          (item) => item.id === isProduct.id
        );
        let products = [...state.cartItems];
        let show = (products[Index].quantity += 1);
        products[Index].tPrice = action.payload[1] * show;
        products[Index].stock -= 1;
        const totalPriceArr = state.cartItems.map(
          (el) => el.price * el.quantity
        );
        const totalPrice = totalPriceArr.reduce((a, b) => a + b, 0);
        products[Index].tPrice = totalPrice;
        state.cartItems = products;

        const updatedPrice = state.cartItems.reduce((a, b) => a + b.tPrice, 0);
        console.log(totalPrice);
        state.totalAmount = updatedPrice;
      }
      toast.info("Increased to Cart");
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;
      }
      const updatedPrice = state.cartItems.reduce((a, b) => a + b.tPrice, 0);
      state.totalAmount = updatedPrice;
    },

    decreaseCart: (state, action) => {
      const ItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartItems[ItemIndex].quantity > 1) {
        state.cartItems[ItemIndex].quantity -= 1;
        state.cartItems[ItemIndex].stock++;
      } else {
        ItemIndex.quantity--;
        ItemIndex.totalPrice =
          Number(ItemIndex.totalPrice) + Number(action.payload.price);
      }
      const updatedPriceArr = state.cartItems.map(
        (el) => el.price * el.quantity
      );
      const updatedPrice = updatedPriceArr.reduce((a, b) => a + b, 0);
      state.cartItems[ItemIndex].tPrice = updatedPrice;
      state.totalAmount = state.cartItems.reduce((a, b) => a + b.tPrice, 0);
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;

//24:00
