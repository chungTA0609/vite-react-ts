import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../constants/products";
interface ProductListState {
  productList: Array<object>;
}

const initialState: ProductListState = {
  productList: [...products],
};

export const productListSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { addProduct } = productListSlice.actions;
