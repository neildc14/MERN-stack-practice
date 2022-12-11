import { configureStore } from "@reduxjs/toolkit";
import { workoutsApi } from "../services/api/workouts";
import { userApi } from "../services/api/users";
import idReducer from "../services/features/idSlice";
import userReducer from "../services/features/userSlice";

const store = configureStore({
  reducer: {
    [workoutsApi.reducerPath]: workoutsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    updateID: idReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutsApi.middleware, userApi.middleware),
});

export default store;
