import { createSlice } from "@reduxjs/toolkit";
const CityChooseSlice = createSlice({
  name: "mainCity",
  initialState: {
    mainRegion: "",
    typeRegion: "",
    isOpen: false,
  },
  reducers: {
    setMainRegion: (state, action) => {
      state.mainRegion = action.payload.name;
      state.typeRegion = action.payload.type;
      state.isOpen = false;
    },
    toggleMainRegion: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { setMainRegion, toggleMainRegion } = CityChooseSlice.actions;
export default CityChooseSlice.reducer;
