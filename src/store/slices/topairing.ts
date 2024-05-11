import { createSlice } from "@reduxjs/toolkit";
import { DataOfSections } from "../types";

interface topAiringInitialState {
  loaded: boolean;
  data: DataOfSections[];
}

const initialState: topAiringInitialState = {
  loaded: false,
  data: [],
};

const topAiringSlice = createSlice({
  name: "topAiringSlice",
  initialState,
  reducers: {
    loadTopAiringData: (state, action) => {
      state.data = action.payload;
      state.data.length = 6;
      state.loaded = state.data.length > 0;
      // console.log(state.data);   PASSED
    },
  },
});

export default topAiringSlice.reducer;
export const { loadTopAiringData } = topAiringSlice.actions;
