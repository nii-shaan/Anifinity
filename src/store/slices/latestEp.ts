import { createSlice } from "@reduxjs/toolkit";
import type { DataOfSections } from "../types";

interface LatestEpInitialState {
  loaded: boolean;
  data: DataOfSections[];
}

const initialState: LatestEpInitialState = {
  loaded: false,
  data: [],
};

const latestEpSlice = createSlice({
  name: "latestEpSlice",
  initialState,
  reducers: {
    loadLatestEpData: (state, action) => {
      state.data = action.payload;
      state.data.length = 12;
      state.loaded = state.data.length > 0;
    },
  },
});

export default latestEpSlice.reducer;
export const { loadLatestEpData } = latestEpSlice.actions;
