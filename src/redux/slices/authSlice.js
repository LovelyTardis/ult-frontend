import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  fetching: true,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    loginAction: (state, data) => {
      const { payload } = data;
      state.isAuth = true;
      state.user = payload;
      state.fetching = false;
      localStorage.setItem("user-token", payload.token);
    },
    logoutAction: (state) => {
      state.isAuth = false;
      state.user = null;
      state.fetching = false;
      localStorage.removeItem("user-token");
    },
    startFeching: (state) => {
      state.fetching = true;
    },
    endFetching: (state) => {
      state.fetching = false;
    },
  },
});

export const { loginAction, logoutAction, startFeching, endFetching } =
  authSlice.actions;
export default authSlice.reducer;
