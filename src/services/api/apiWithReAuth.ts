/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable no-param-reassign */
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

import { DOMAIN } from "config";
import { checkAuth, logout, store } from "store";

const options = {
  baseURL: DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
};
export const api = axios.create(options);

export const apiWithToken = axios.create(options);

const getTokens = () => {
  const { user } = store.getState();
  const { tokens } = user;

  return tokens;
};

apiWithToken.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const { accessToken } = getTokens();
  if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

apiWithToken.interceptors.response.use(
  (config) => config,
  async (
    error: AxiosError & { config: InternalAxiosRequestConfig & { isRetry: boolean | undefined } },
  ) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest.isRetry) {
      originalRequest.isRetry = true;
      try {
        let { refreshToken } = getTokens();
        await store.dispatch(checkAuth(refreshToken));
        ({ refreshToken } = getTokens());
        if (refreshToken) return apiWithToken.request(originalRequest);
      } catch (e) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
