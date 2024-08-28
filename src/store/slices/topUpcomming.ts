import { createSlice } from "@reduxjs/toolkit";
import type { DataOfSections } from "../types";

interface TopUpcommingInitialState {
  loaded: boolean;
  data: DataOfSections[];
}

const initialState: TopUpcommingInitialState = {
  loaded: false,
  data: [],
};

const topUpcommingSlice = createSlice({
  name: "topUpcommingSlice",
  initialState,
  reducers: {
    loadTopUpcommingData: (state, action) => {
      state.data = action.payload;
      state.data.length = 12;
      state.loaded = state.data.length > 0;
    },
  },
});

export default topUpcommingSlice.reducer;
export const { loadTopUpcommingData } = topUpcommingSlice.actions;
