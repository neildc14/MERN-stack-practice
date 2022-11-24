import { configureStore } from "@reduxjs/toolkit";
import { workoutsApi } from "../services/api/workouts";

const store = configureStore({
  reducer: {
    [workoutsApi.reducerPath]: workoutsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutsApi.middleware),
});

export default store;
