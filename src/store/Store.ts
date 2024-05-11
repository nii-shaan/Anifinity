import { configureStore } from "@reduxjs/toolkit";
import spotlightReducer from "./slices/spotlight";
import topAiringReducer from "./slices/topairing";
import mostPolpularReducer from "./slices/mostPolpular";
import mostFavReducer from "./slices/mostFav";
import latestEpReducer from "./slices/latestEp";
import topUpcommingReducer from "./slices/topUpcomming";

const store = configureStore({
  reducer: {
    spotlight: spotlightReducer,
    topAiring: topAiringReducer,
    mostPolpular: mostPolpularReducer,
    mostFav: mostFavReducer,
    latestEp: latestEpReducer,
    topUpcomming: topUpcommingReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
