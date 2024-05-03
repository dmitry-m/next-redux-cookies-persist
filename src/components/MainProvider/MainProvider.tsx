import { ThemeProvider, useTheme } from "next-themes";
import NextProgressBar from "nextjs-progressbar";
import * as React from "react";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Theme, ToastContainer } from "react-toastify";

import { AuthProvider } from "./AuthProvider";

import { Layout } from "components";
import { wrapper } from "store";

import { MainProviderProps, PropsAndStore } from "types";

export const MainProvider = ({ Component, ...rest }: MainProviderProps): JSX.Element => {
  const propsAndStore: PropsAndStore = wrapper.useWrappedStore(rest);
  const { store, props } = propsAndStore;

  const { theme, resolvedTheme } = useTheme();
  const [colorTheme, setColorTheme] = useState<string | undefined>(theme);

  useEffect(() => {
    setColorTheme(theme === "system" ? resolvedTheme : theme);
  }, [theme, resolvedTheme]);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <NextProgressBar
          color="rgb(115 81 245)"
          startPosition={0.35}
          stopDelayMs={150}
          height={4}
          showOnShallow={false}
        />
        <AuthProvider Component={Component}>
          <Layout>
            <ToastContainer theme={colorTheme as Theme} />
            <Component {...props.pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MainProvider;
