import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { AuthService } from "services";
import { errorMessage } from "utils";

import { AuthResponse, EmailPasswordInput, User, IsAdminInput } from "types";

export const register = createAsyncThunk<AuthResponse, EmailPasswordInput>(
  "auth/register",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register({ email, password });
      toast.success("Registration Completed successfully");
      return response.data;
    } catch (error) {
      const message = errorMessage(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const login = createAsyncThunk<AuthResponse, EmailPasswordInput>(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login({ email, password });
      toast.success("Login Completed successfully");
      return response.data;
    } catch (error) {
      const message = errorMessage(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const toggleIsAdmin = createAsyncThunk<User, IsAdminInput>(
  "auth/toggleAdmin",
  async ({ isAdmin }, thunkAPI) => {
    try {
      const response = await AuthService.changeAdmin({ isAdmin });
      toast.success("Change Role Completed successfully");
      return response.data;
    } catch (error) {
      const message = errorMessage(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", () => {
  toast.success("Log out completed successfully");
});

export const checkAuth = createAsyncThunk("auth/token", async (refreshToken: string, thunkAPI) => {
  try {
    const response = await AuthService.getNewTokens(refreshToken);
    return response.data;
  } catch (error) {
    let message = errorMessage(error);
    if (message === "Invalid token or expired") {
      message = "Logout! Your authorization is finished, please log in again";
    }
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});
