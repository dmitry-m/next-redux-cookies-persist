/* eslint-disable no-param-reassign */
import { createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { checkAuth, login, logout, register, toggleIsAdmin } from "./user.actions";

import { AuthResponse } from "types";

type UserState = AuthResponse & { isLoading: boolean };

const initialState: UserState = {
  user: { id: 0, email: "", isAdmin: false, favorites: [], createdAt: null },
  tokens: { accessToken: "", refreshToken: "" },
  isLoading: false,
};

const hydrateAction = createAction<{ user: UserState }>(HYDRATE);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hydrateAction, (state, { payload }) => {
        const { user: data }: { user: UserState } = payload;

        if (data) {
          const { user, tokens } = data;
          if (
            JSON.stringify(user) !== JSON.stringify(state.user) ||
            JSON.stringify(tokens) !== JSON.stringify(state.tokens)
          ) {
            // const userKeys = Object.keys(data) as Array<keyof typeof data>;
            // const tokensKeys = Object.keys(tokens) as Array<keyof typeof tokens>;
            // userKeys.forEach((key) => {
            //   console.log({ key, state: state.user[key], user: data[key] });
            //   state.user[key] = data[key];
            // });
            // tokensKeys.forEach((key) => {
            //   state.tokens[key] = tokens[key];
            // });
            state.user.id = user.id;
            state.user.email = user.email;
            state.user.isAdmin = user.isAdmin;
            state.user.favorites = user.favorites;
            state.user.createdAt = user.createdAt;
            state.tokens.accessToken = tokens.accessToken;
            state.tokens.refreshToken = tokens.refreshToken;
            state.isLoading = false;
          }
        }
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.user = initialState.user;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.user.favorites = payload.user.favorites;
        state.tokens = payload.tokens;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = initialState.user;
        state.tokens = initialState.tokens;
      })
      .addCase(toggleIsAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleIsAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(toggleIsAdmin.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = initialState.user;
        state.tokens = initialState.tokens;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.tokens = payload.tokens;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.user = initialState.user;
        state.tokens = initialState.tokens;
      });
  },
});

export const { reducer } = userSlice;
