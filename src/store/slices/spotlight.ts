import { createSlice } from "@reduxjs/toolkit";
import type { DataOfSections } from "../types";

interface spotlightState {
  loaded: boolean;
  data: DataOfSections[];
}
const initialState: spotlightState = {
  loaded: false,
  data: [],
};

const spotlightSlice = createSlice({
  name: "spotlight",
  initialState,
  reducers: {
    loadSpotlightData: (state, action) => {
      state.data = action.payload;
      state.data.length = 12;
      state.loaded = state.data.length > 0;
      // console.log(state.data);
    },
  },
});

export const { loadSpotlightData } = spotlightSlice.actions;
export default spotlightSlice.reducer;
