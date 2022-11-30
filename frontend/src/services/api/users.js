import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIEndpoint = "http://localhost:4000/api/user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${APIEndpoint}` }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (post) => ({
        url: "/signup",
        method: "POST",
        body: post,
      }),
    }),
    logIn: builder.mutation({
      query: (post) => ({
        url: "/login",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = userApi;
