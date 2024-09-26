import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PopupState = {
  isProductPopupVisible: boolean;
  isRegistrationPopupVisible: boolean;
};

const initialState: PopupState = {
  isProductPopupVisible: false,
  isRegistrationPopupVisible: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showRegistrationPopup: (state) => {
      state.isRegistrationPopupVisible = true;
    },
    showProductPopup: (state) => {
      state.isProductPopupVisible = true;
    },
    hidePopup: (state) => {
      state.isProductPopupVisible = false;
      state.isRegistrationPopupVisible = false;
    },
  },
});

export const { showRegistrationPopup, showProductPopup, hidePopup } =
  popupSlice.actions;

export default popupSlice.reducer;
