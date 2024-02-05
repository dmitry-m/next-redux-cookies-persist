import { apiWithToken, api } from "./api/apiWithReAuth";

import { URLS } from "config";

import { AuthResponse, EmailPasswordInput, IsAdminInput, User } from "types";

export const AuthService = {
  async register({ email, password }: EmailPasswordInput) {
    const response = await api.post<AuthResponse>(URLS.auth.register, {
      email,
      password,
    });

    return response;
  },
  async login({ email, password }: EmailPasswordInput) {
    const response = await api.post<AuthResponse>(URLS.auth.login, {
      email,
      password,
    });

    return response;
  },
  async getNewTokens(refreshToken: string) {
    const response = await api.post<AuthResponse>(URLS.auth.token, {
      refreshToken,
    });

    return response;
  },
  async changeAdmin({ isAdmin }: IsAdminInput) {
    const response = await apiWithToken.put<User>(URLS.auth.changeAdmin, {
      isAdmin,
    });
    return response;
  },
};

export default AuthService;
