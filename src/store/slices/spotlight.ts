import { createSlice } from "@reduxjs/toolkit";

export interface Data {
  id: string;
  title: string;
  url: string;
  image: string;
  duration: string;
  japaneseTitle: string;
  type: string;
  nsfw: boolean;
  sub: number;
  dub: number;
  episodes: number;
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
    loadData: (state, action) => {
      state.data = action.payload;
      state.data.length = 12;
      state.loaded = state.data.length > 0;
      console.log(state.data);
    },
  },
});

export const { loadData } = spotlightSlice.actions;
export default spotlightSlice.reducer;
