import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return api.get("/products");
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export const selector = (state) => state.productsState;
