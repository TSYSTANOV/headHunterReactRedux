import { configureStore } from "@reduxjs/toolkit";
import CityChooseSlice from "./CityChooseSlice";
import FilterAndSort from "./FilterAndSort";
import VacanciesSlice from "./VacanciesSlice";

export const store = configureStore({
  reducer: {
    mainRegion: CityChooseSlice,
    filterAndSort: FilterAndSort,
    vacanciesList: VacanciesSlice,
  },
});
