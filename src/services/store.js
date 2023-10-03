import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// Global state that saves the entire information of our app
// We don't need the entire state so we reduce it to a specific slice of the pie which is articleApi
// It means we just need something from this API
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
