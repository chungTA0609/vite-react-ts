import { createSlice } from "@reduxjs/toolkit";
interface CartState {
  open: boolean;
  cartProduct: Array<object>;
  subtotal: number;
}

const initialState: CartState = {
  open: false,
  cartProduct: [],
  subtotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    change: (state, action) => {
      state.open = action.payload;
    },
    updateCart: (state, action) => {
      state.cartProduct = action.payload;
    },
    updateSubtotal: (state, action) => {
      state.subtotal = action.payload;
    },
  },
});

export const { change, updateCart, updateSubtotal } = cartSlice.actions;
