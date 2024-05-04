import { createSlice } from "@reduxjs/toolkit";
//helpers
import { sumItemes } from "../../helpers/helpers";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });

        state.itemsCounter = sumItemes(state).itemsCounter;
        state.total = sumItemes(state).total;
        state.checkout = false;
      }
    },

    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (items) => items.id !== action.payload.id
      );
      state.itemsCounter = sumItemes(state).itemsCounter;
      state.total = sumItemes(state).total;
      state.checkout = false;
    },

    increase: (state, action) => {
      state.selectedItems.find((item) => item.id === action.payload.id)
        .quantity++;
      state.itemsCounter = sumItemes(state).itemsCounter;
      state.total = sumItemes(state).total;
      state.checkout = false;
    },

    decrease: (state, action) => {
      state.selectedItems.find((item) => item.id === action.payload.id)
        .quantity--;
      state.itemsCounter = sumItemes(state).itemsCounter;
      state.total = sumItemes(state).total;
      state.checkout = false;
    },

    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItems, increase, removeItem, decrease, checkout } =
  cartSlice.actions;
export const selector = (state) => state.cartState;
