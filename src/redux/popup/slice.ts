import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PopupState = {
  isPopupVisible: boolean;
};

const initialState: PopupState = {
  isPopupVisible: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup: (state) => {
      state.isPopupVisible = true;
    },
    hidePopup: (state) => {
      state.isPopupVisible = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;
