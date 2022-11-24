import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiEndpoint = "http://localhost:4000/api/workouts";

export const workoutsApi = createApi({
  reducerPath: "workoutsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiEndpoint}` }),
  endpoints: (builder) => ({
    getAllWorkouts: builder.query({ query: () => "/" }),
    getWorkout: builder.query({
      query: (workout_id) => `/${workout_id}`,
    }),
  }),
});

export const { useGetAllWorkoutsQuery, useGetWorkoutQuery } = workoutsApi;
