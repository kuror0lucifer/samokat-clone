import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PopupState = {
  isProductPopupVisible: boolean;
  isRegistrationPopupVisible: boolean;
  visibleProductId: null | string;
};

const initialState: PopupState = {
  isProductPopupVisible: false,
  isRegistrationPopupVisible: false,
  visibleProductId: null,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showRegistrationPopup: (state) => {
      state.isRegistrationPopupVisible = true;
    },
    showProductPopup: (state, action) => {
      state.visibleProductId = action.payload;
    },
    hidePopup: (state) => {
      state.visibleProductId = null;
      state.isRegistrationPopupVisible = false;
    },
  },
});

export const { showRegistrationPopup, showProductPopup, hidePopup } =
  popupSlice.actions;

export default popupSlice.reducer;
