import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import popupReducer from "./popup/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
