import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReAuth } from "./queryWithReAuth";

import { URLS } from "config";

import { User } from "types";

export const userQuery = createApi({
  reducerPath: "query",
  tagTypes: ["User"],
  baseQuery: baseQueryWithReAuth,
  endpoints: (build) => ({
    getUsers: build.query<User[], number>({
      query: (limit = 50) => ({
        url: URLS.auth.users,
        _limit: limit,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User" as const, id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
    getUser: build.query<User, string>({
      query: (id) => ({ url: `${URLS.auth.users}/${id}` }),
      providesTags: (result, error, id) => [
        { type: "User", id: "LIST" },
        { type: "User", id },
      ],
    }),
    deleteUser: build.mutation<void, number>({
      query: (id) => ({
        url: `${URLS.auth.users}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "User", id: "LIST" },
        { type: "User", id },
      ],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useDeleteUserMutation } = userQuery;
