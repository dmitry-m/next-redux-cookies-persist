/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Theme, ToastContainer } from "react-toastify";

import { selectUser, useAppSelector } from "store";

import { AuthProviderProps } from "types";

export function AuthProvider({ children, Component }: AuthProviderProps): JSX.Element {
  const { push, pathname, query } = useRouter();
  const {
    user,
    tokens: { accessToken },
  } = useAppSelector(selectUser);

  const { theme, resolvedTheme } = useTheme();
  const [colorTheme, setColorTheme] = useState<string | undefined>(theme);

  useEffect(() => {
    setColorTheme(theme === "system" ? resolvedTheme : theme);
  }, [theme]);

  useEffect(() => {
    if (Component.auth === "admin" && !user.isAdmin) {
      let redirect = "/404";
      if (pathname !== redirect && pathname !== "/auth/login") {
        redirect = query.redirect ? String(query.redirect) : redirect;
        void push(redirect);
      }
    } else if (Component.auth && !accessToken) void push("/auth/login");
  }, [accessToken, Component]);

  if (!Component.auth || user.isAdmin || (accessToken && Component.auth === "user")) {
    return (
      <>
        <ToastContainer theme={colorTheme as Theme} />
        {children}
      </>
    );
  }

  return <ToastContainer theme={colorTheme as Theme} />;
}

export default AuthProvider;
