import { ThemeProvider } from "next-themes";
import NextProgressBar from "nextjs-progressbar";
import { Provider } from "react-redux";

import { AuthProvider } from "./AuthProvider";

import { Layout } from "components";
import { wrapper } from "store";

import { MainProviderProps, PropsAndStore } from "types";

export const MainProvider = ({ Component, ...rest }: MainProviderProps): JSX.Element => {
  const propsAndStore: PropsAndStore = wrapper.useWrappedStore(rest);
  const { store, props } = propsAndStore;

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
            <Component {...props.pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MainProvider;
