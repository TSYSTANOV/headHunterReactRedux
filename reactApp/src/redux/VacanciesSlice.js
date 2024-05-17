import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../Utils/api";
import { resetFilters, setState } from "./FilterAndSort";

export const fetchVacancies = createAsyncThunk(
  "vacancies/fetch",
  async ({ mainRegion, typeRegion }) => {
    const data = await fetch(`${BASE_URL}/?${typeRegion}=${mainRegion}`).then(
      (res) => res.json()
    );
    return data;
  }
);
export const fetchSearchVacancies = createAsyncThunk(
  "vacancies/fetch",
  async (searchValue) => {
    const data = await fetch(`${BASE_URL}/?search=${searchValue}`).then((res) =>
      res.json()
    );
    return data;
  }
);
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
  extraReducers: (builder) => {
    builder.addCase(fetchVacancies.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchVacancies.fulfilled, (state, action) => {
      state.loading = "success";
      state.vacancies = action.payload;
    });
    builder.addCase(fetchVacancies.rejected, (state) => {
      state.loading = "failed";
    });
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchVacancies.fulfilled, (state, action) => {
      state.vacancies = action.payload;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(setState, (state, action) => {
      console.log(action);
      console.log("working");
    });
  },
});
export const { setVacancies, toggleSingleVacancy } = VacansiesSlice.actions;
export default VacansiesSlice.reducer;
