import { configureStore } from "@reduxjs/toolkit";
import CityChooseSlice from "./CityChooseSlice";

export const store = configureStore({
  reducer: {
    mainRegion: CityChooseSlice,
  },
});
