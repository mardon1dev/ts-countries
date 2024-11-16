import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryType } from "../pages/Home";

type SavedListState = CountryType[];

const loadSavedList = (): SavedListState => {
  try {
    const saved = localStorage.getItem("saved");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const initialState: SavedListState = loadSavedList();

const savedList = createSlice({
  name: "savedList",
  initialState,
  reducers: {
    addToList(state, action: PayloadAction<CountryType>) {
      state.push(action.payload);
      localStorage.setItem("saved", JSON.stringify(state));
    },
    removeFromList(state, action: PayloadAction<string>) {
      const index = state.findIndex((country) => country.countryName === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("saved", JSON.stringify(state));
      }
    },
  },
});

export const { addToList, removeFromList } = savedList.actions;

export default savedList.reducer;
