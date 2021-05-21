import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "./placesSlice";

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
});
