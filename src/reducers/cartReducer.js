import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setTotalCost(state, action) {
      state.totalCost = action.payload;
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product && product.quantity < 10) {
        product.quantity += 1;
        product.total = product.quantity * product.price;
        state.totalCost = state.products.reduce((acc, p) => acc + p.total, 0);
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        product.total = product.quantity * product.price;
        state.totalCost = state.products.reduce((acc, p) => acc + p.total, 0);
      }
    },
    removeProduct(state, action) {
      const productId = action.payload;
      state.products = state.products.filter((p) => p.id !== productId);
      state.totalCost = state.products.reduce((acc, p) => acc + p.total, 0);
    },
  },
});

export const {
  setProducts,
  setTotalCost,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
