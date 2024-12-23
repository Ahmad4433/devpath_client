import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { headerHeight: null },
  reducers: {
    setHeaderHeight(state, action) {
      state.headerHeight = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
