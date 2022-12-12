import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const userIsLoggedIn = !!token;
const initialAuthState = {
  token: "",
  isLoggedIn: userIsLoggedIn,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
