import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: () => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser } = userSlice.actions;
