import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../../features/cart/cartSlice";
import { productListSlice } from "../../features/product/productListSlice";
import { accountSlice } from "../../features/account/accountSlice";
import { countrySlice } from "../../features/country/countrySlice";
// ...

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    productList: productListSlice.reducer,
    account: accountSlice.reducer,
    country: countrySlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
