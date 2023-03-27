import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    loginAction: (state, data) => {
      const { payload } = data;
      state.isAuth = true;
      state.user = payload;
    },
    logoutAction: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
