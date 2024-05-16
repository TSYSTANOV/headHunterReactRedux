import { createSlice } from "@reduxjs/toolkit";

const filterParams = { salary: "", experience: "", employment: [] };

const FilterAndSort = createSlice({
  name: "filterAndSort",
  initialState: {
    period: "365",
    order: "date",
    searchValue: "",
    ...filterParams,
  },
  reducers: {
    setState: (state, action) => {
      if (action.payload.type === "employment") {
        if (Array.isArray(action.payload.value)) {
          state[action.payload.type] = action.payload.value;
          return;
        }
        if (state[action.payload.type].includes(action.payload.value)) {
          state[action.payload.type].splice(
            state[action.payload.type].indexOf(action.payload.value),
            1
          );
        } else {
          state[action.payload.type].push(action.payload.value);
        }
        return;
      }
      state[action.payload.type] = action.payload.value;
    },
    resetFilters: (state) => {
      return { ...state, ...filterParams };
    },
  },
});
export const { setState, resetFilters } = FilterAndSort.actions;
export default FilterAndSort.reducer;
