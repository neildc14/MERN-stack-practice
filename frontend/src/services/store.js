import { configureStore } from "@reduxjs/toolkit";
import { workoutsApi } from "../services/api/workouts";
import idReducer from "../services/features/idSlice";
const store = configureStore({
  reducer: {
    [workoutsApi.reducerPath]: workoutsApi.reducer,
    updateID: idReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutsApi.middleware),
});

export default store;
