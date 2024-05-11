import { createSlice } from "@reduxjs/toolkit";
import type { DataOfSections } from "../types";

interface MostFavInitialState {
  loaded: boolean;
  data: DataOfSections[];
}

const initialState: MostFavInitialState = {
  loaded: false,
  data: [],
};

const mostFavSlice = createSlice({
  name: "mostFavSlice",
  initialState,
  reducers: {
    loadMostFavData: (state, action) => {
      state.data = action.payload;
      state.data.length = 6;
      state.loaded = state.data.length > 0;
      // console.log(state.data);   PASSED  
      
    },
  },
});

export default mostFavSlice.reducer;
export const { loadMostFavData } = mostFavSlice.actions;
