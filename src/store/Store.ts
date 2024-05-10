import { configureStore } from "@reduxjs/toolkit";
import spotlightReducer from "./slices/spotlight";

const store = configureStore({
  reducer: {
    spotlight: spotlightReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
