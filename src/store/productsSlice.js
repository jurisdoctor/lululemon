import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find(
        (product) => product.id === productId
      );
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
