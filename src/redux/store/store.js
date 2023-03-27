import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "../slices";

export const store = configureStore({
  reducer: { auth: authReducer },
  middleware: [thunk],
  devTools: true,
});
