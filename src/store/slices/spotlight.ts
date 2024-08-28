import { createSlice } from "@reduxjs/toolkit";

export interface Data {
  rank: number;
  id: string;
  name: string;
  description: string;
  poster: string;
  jname: string;
  episodes: {
    sub: number;
    dub: number;
  };
  otherInfo: string[];
}

interface spotlightState {
  loaded: boolean;
  data: Data[];
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
