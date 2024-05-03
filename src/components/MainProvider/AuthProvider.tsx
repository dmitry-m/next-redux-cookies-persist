/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";

import { selectUser, useAppSelector } from "store";

import { AuthProviderProps } from "types";

export function AuthProvider({ children, Component }: AuthProviderProps): JSX.Element {
  const { push, pathname, query } = useRouter();
  const {
    user,
    tokens: { accessToken },
  } = useAppSelector(selectUser);

  useEffect(() => {
    if (Component.auth && !accessToken) void push("/auth/login");
    else if (Component.auth === "admin" && !user.isAdmin) {
      const redirect = "/404";
      if (pathname !== redirect && pathname !== "/auth/login") {
        const redirectPath = query.redirect ? String(query.redirect) : redirect;
        void push(redirectPath);
      }
    }
  }, [accessToken, Component, user.isAdmin]);

  if (!Component.auth || user.isAdmin || (accessToken && Component.auth === "user")) {
    return children;
  }

  return <div />;
}

export default AuthProvider;
