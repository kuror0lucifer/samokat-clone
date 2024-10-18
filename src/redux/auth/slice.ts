import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthState from "./types";

const initialState: AuthState = {
  token: null,
  email: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = AuthSlice.actions;

export default AuthSlice.reducer;
