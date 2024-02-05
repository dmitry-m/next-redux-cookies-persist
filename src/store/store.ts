import { combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action } from "redux";

import { userQuery } from "./query/userQuery";
import { reducer as userReducer } from "./user/user.slice";

import { maxAge } from "config";

const reducer = combineReducers({
  user: userReducer,
  [userQuery.reducerPath]: userQuery.reducer,
});

export const store = configureStore({
  reducer,
  devTools: process.env.REACT_APP_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userQuery.middleware)
      .prepend(
        nextReduxCookieMiddleware({
          subtrees: [{ subtree: "user", maxAge, compress: false }],
        }),
      ),
});

const makeStore = wrapMakeStore(() => store);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const selectUser = (state: AppState) => state.user;

export const wrapper = createWrapper<AppStore>(makeStore);
