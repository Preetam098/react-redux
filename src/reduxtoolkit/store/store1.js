import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducres/index1";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});
