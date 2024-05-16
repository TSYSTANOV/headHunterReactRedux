import { createSlice } from "@reduxjs/toolkit";

const VacansiesSlice = createSlice({
  name: "vacanciesList",
  initialState: {
    vacancies: [],
    loading: "",
    openSingleVacancy: { isOpen: false, id: "" },
  },
  reducers: {
    setVacancies: (state, action) => {
      state.vacancies = action.payload;
    },
    toggleSingleVacancy: (state, action) => {
      state.openSingleVacancy = {
        isOpen: !state.openSingleVacancy.isOpen,
        id: action.payload === "reset" ? "" : action.payload,
      };
    },
  },
});
export const { setVacancies, toggleSingleVacancy } = VacansiesSlice.actions;
export default VacansiesSlice.reducer;
