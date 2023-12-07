import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };
const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducer: {
    LogIn(state) {
      console.log("run");
      state.isAuth = true;
    },
    LogOut(state) {
      state.isAuth = false;
    },
  },
});
export const { LogIn, LogOut } = authSlice.actions;
export default authSlice.reducer;
