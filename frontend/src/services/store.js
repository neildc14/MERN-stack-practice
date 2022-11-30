import { configureStore } from "@reduxjs/toolkit";
import { workoutsApi } from "../services/api/workouts";
import { userApi } from "../services/api/users";
import idReducer from "../services/features/idSlice";

const store = configureStore({
  reducer: {
    [workoutsApi.reducerPath]: workoutsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    updateID: idReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutsApi.middleware, userApi.middleware),
});

export default store;
