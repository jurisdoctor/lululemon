import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 10,
  discount: 200,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find((i) => i.product.id === newProduct.id);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;

      const cartItem = state.items.find(
        (item) => item.product.id === productId
      );

      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});

export const selectNumberOfItems = (state) =>
  state.cart.items.reduce((acc, current) => acc + current.quantity, 0);

export const selectSubtotal = (state) =>
  state.cart.items.reduce(
    (acc, current) => acc + current.product.price * current.quantity,
    0
  );

const cartSelector = (state) => state.cart;

export const selectDeiveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.discount ? 0 : cart.deliveryFee)
);

export const { addCartItem, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
