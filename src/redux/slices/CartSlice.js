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
      toast.success("Added to Cart");

      // const existingItem = state.cartItems.find(
      //   (item) => item.id === newItem.id
      // );

      // state.totalQuantity++;
      // if (!existingItem) {
      //   // newItem.stock--;
      //   state.cartItems.push({
      //     id: newItem.id,
      //     productName: newItem.productName,
      //     imgUrl: newItem.imgUrl,
      //     price: newItem.price,
      //     quantity: 1,
      //     totalPrice: newItem.price,
      //     stock: newItem.stock,
      //   });
      //   toast.success("Added to Cart");
      // } else {
      //   if (existingItem.stock > 0) {
      //     existingItem.quantity++;

      //     existingItem.totalPrice =
      //       Number(existingItem.totalPrice) + Number(newItem.price);
      //     // existingItem.stock -= 1;
      //     toast.success("Added to Cart");
      //     state.totalQuantity++;
      //   } else {
      //     toast.error("Product Out Of Stock");
      //   }

      // }
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

        // const totalPrice = state.cartItems.reduce((a, b) => a + b.price, 0);
        // state.totalAmount = totalPrice;

        // const updatePrice = state.cartItems.reduce(
        //   (total, item) => total + Number(item.price) * Number(item.quantity),
        //   0
        // );
        // let arr = [1, 2, 3, 4];
        // console.log(arr.reduce((a, b) => a + b, 0));

        // console.log(tPrice);
        const updatedPrice = state.cartItems.reduce((a, b) => a + b.tPrice, 0);
        console.log(totalPrice);
        state.totalAmount = updatedPrice;
      }
      toast.success("Increased to Cart");
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.tPrice) * Number(item.quantity),
        0
      );
    },
    // IncreaseCart: (state, action) => {
    //   const ItemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload
    //   );
    //   if (state.cartItems[ItemIndex].stock > 0) {
    //     state.cartItems[ItemIndex].quantity += 1;
    //     state.totalQuantity++;
    //     state.cartItems[ItemIndex].stock--;
    //     state.totalAmount = state.cartItems.reduce(
    //       (total, item) =>
    //         total + Number(item.totalPrice) * Number(item.quantity),
    //       0
    //     );
    //   } else {
    //     toast.error("Product Out Of Stock");
    //   }
    // },
    decreaseCart: (state, action) => {
      const ItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.totalQuantity--;
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

      // state.cartItems.tPrice = state.cartItems.price * state.cartItems.quantity;

      //total = 0 , item = 200 => total = 200;

      // state.totalAmount = state.cartItems.reduce(
      //   (total, item) =>
      //     total + Number(item.totalPrice) * Number(item.quantity),
      //   0
      // );
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;

//24:00
