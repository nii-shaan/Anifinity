import { createSlice } from "@reduxjs/toolkit";
import type { DataOfSections } from "../types";


interface MostPopularInitialState {
  loaded: boolean;
  data: DataOfSections[];
}

const initialState: MostPopularInitialState = {
  loaded: false,
  data: [],
};
const mostPopularSlice = createSlice({
  name: "mostPopularSlice",
  initialState,
  reducers: {
    loadMostPopularData: (state, action) => {
      state.data = action.payload;
      state.data.length = 6;
      state.loaded = state.data.length > 0;
      // console.log(state.data);    PASSED
      
    },
  },
});

export default mostPopularSlice.reducer;
export const { loadMostPopularData } = mostPopularSlice.actions;
