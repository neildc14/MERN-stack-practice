import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IDToUpdate: "",
};

const idSlice = createSlice({
  name: "idToUpdate",
  initialState,
  reducers: {
    setIDToUpdate: (state, action) => {
      state.IDToUpdate = action.payload;
    },
  },
});

export default idSlice.reducer;
export const { setIDToUpdate } = idSlice.actions;
