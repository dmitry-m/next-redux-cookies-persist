import { NextComponentType, NextPage, NextPageContext } from "next";
import { AppProps } from "next/app";

import { AppStore } from "store";

export type TypeRoles = { auth: "admin" | "user" };

export type NextPageAuth = NextComponentType<NextPageContext, any, any> & {
  auth?: "admin" | "user";
};

export type MainProviderProps = {
  Component: NextPageAuth;
};

export type AuthProviderProps = {
  children: JSX.Element;
  Component: NextPageAuth;
};

export type PropsAndStore = { store: AppStore; props: AppProps };

export type ExtendedAppProps<P = object> = AppProps<P> & {
  Component: NextPageAuth;
};
