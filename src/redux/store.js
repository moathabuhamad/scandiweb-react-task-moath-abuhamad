import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    activeCurrency: 0,
  },
});
