import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "../feature/products/productsSlice";
import cartSlice from "../feature/cart/cartSlice";

const store = configureStore({
  reducer: {
    productsState: productsSlice,
    cartState: cartSlice,
  },
});

export default store;
