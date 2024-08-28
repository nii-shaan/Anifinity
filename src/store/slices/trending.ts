import { createSlice } from "@reduxjs/toolkit";

interface DataOfTrending {
  rank: number;
  name: string;
  id: string;
  poster: string;
}

interface InitialState {
  loaded: boolean;
  data: DataOfTrending[];
}

const initialState: InitialState = {
  loaded: false,
  data: [],
};

const trendingSlice = createSlice({
  name: "trendingSlice",
  initialState,
  reducers: {
    loadTrendingData: (state, action) => {
      state.data = action.payload;
      state.loaded = state.data.length > 0;
    },
  },
});

export default trendingSlice.reducer;
export const { loadTrendingData } = trendingSlice.actions;
