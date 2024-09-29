import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../action/index1";

const initialState = {
  loading: false,
  fetchLoading: false,
  userInfo: {},
};

const authReducer = createSlice({
  name: "Auth Reducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(getUserInfo.rejected, (state) => {
        state.fetchLoading = false;
      });
  },
});

export default authReducer.reducer;
