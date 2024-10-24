import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import popupReducer from "./popup/slice";
import authReducer from "./auth/slice";
import cartReducer from "./cart/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    popup: popupReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
