import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIEndpoint = "http://localhost:4000/api/workouts";

export const workoutsApi = createApi({
  reducerPath: "workoutsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${APIEndpoint}` }),
  endpoints: (builder) => ({
    getAllWorkouts: builder.query({ query: () => "/" }),
    getWorkout: builder.query({
      query: (workout_id) => `/${workout_id}`,
    }),
    createWorkout: builder.mutation({
      query: (post) => ({
        url: "/",
        method: "POST",
        body: post,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    updateWorkout: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetAllWorkoutsQuery,
  useGetWorkoutQuery,
  useCreateWorkoutMutation,
  useDeleteWorkoutMutation,
  useUpdateWorkoutMutation,
} = workoutsApi;
