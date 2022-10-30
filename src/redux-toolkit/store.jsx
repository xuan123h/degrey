import { configureStore } from "@reduxjs/toolkit";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import shoppingSlice from "./shopping-cart/shoppingSlice";

const store = configureStore({
  reducer: {
    cartUi: cartUiSlice.reducer,
    shopping: shoppingSlice.reducer,
  },
});
export default store;
