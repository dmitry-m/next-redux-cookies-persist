import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex, MutexInterface } from "async-mutex";

// import { tokenReceived, loggedOut } from "./authSlice";
import { URLS } from "config";
import { AppState, checkAuth, logout } from "store";

import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

// create a new mutex
const mutex: MutexInterface = new Mutex();
const baseQuery = fetchBaseQuery({
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as AppState)?.user?.tokens?.accessToken;

    // If we have a token set in state, let's assume that we should be passing it.
    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
  credentials: "include",
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        let refreshToken = (api.getState() as AppState)?.user?.tokens?.refreshToken;
        await api.dispatch(checkAuth(refreshToken));
        refreshToken = (api.getState() as AppState)?.user?.tokens?.refreshToken;

        if (refreshToken) {
          result = await baseQuery(args, api, extraOptions);
        } else {
          await api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export default baseQueryWithReAuth;
