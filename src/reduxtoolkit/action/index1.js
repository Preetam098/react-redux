import { createAsyncThunk } from "@reduxjs/toolkit";

const user_info = 'api/endpoint'


// user info
export const getUserInfo = createAsyncThunk(
    "user/user-info",
    async (callback) => {
      try {
        const response = await API_REQUEST({
          url: user_info,
          method: "GET",
        });
        callback && callback(response?.personInfo?.is_vendor);
        return response?.personInfo;
      } catch (error) {}
    }
  );
  