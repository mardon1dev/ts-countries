import { configureStore } from "@reduxjs/toolkit";
import savedList from "./savedList";

export const store = configureStore({
  reducer: {
    savedList,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
