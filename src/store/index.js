import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});
