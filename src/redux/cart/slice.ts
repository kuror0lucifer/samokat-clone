import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";
import { getCartItemsFromLS } from "@/utils/getCartItemsFromLS";
import { calcTotalPrice } from "@/utils/calcTotalPrice";
import { saveCartToLS } from "@/utils/saveCartToLS";

const initialState: CartSliceState = getCartItemsFromLS();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(
        (obj) => obj.productId === action.payload.productId
      );

      if (findItem) {
        findItem.productCount++;
      } else {
        state.items.push({
          ...action.payload,
          productCount: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);

      saveCartToLS(state.items, state.totalPrice);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (obj) => obj.productId !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.items);
      saveCartToLS(state.items, state.totalPrice);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(
        (obj) => obj.productId === action.payload
      );

      if (findItem && findItem.productCount > 1) {
        findItem.productCount--;
        state.totalPrice = calcTotalPrice(state.items);
      } else if (findItem && findItem.productCount === 1) {
        state.items = state.items.filter(
          (obj) => obj.productId !== action.payload
        );
        state.totalPrice = calcTotalPrice(state.items);
      }

      saveCartToLS(state.items, state.totalPrice);
    },
  },
});

export const { addItem, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
