import "react-toastify/dist/ReactToastify.css";
import "styles/globals.css";
import Head from "next/head";
import Router from "next/router";
import ym, { YMInitializer } from "react-yandex-metrika";

import { MainProvider } from "components";
import { siteName } from "config";

import { ExtendedAppProps } from "types";

Router.events.on("routeChangeComplete", (url: string) => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_YANDEX_METRIKA) {
    ym("hit", url);
  }
});

function MyApp({ Component, ...props }: ExtendedAppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
        <title>{siteName}</title>
      </Head>
      {process.env.NEXT_PUBLIC_YANDEX_METRIKA && (
        <YMInitializer
          accounts={[Number.parseInt(process.env.NEXT_PUBLIC_YANDEX_METRIKA, 10)]}
          options={{ webvisor: true, defer: true }}
          version="2"
        />
      )}
      <MainProvider Component={Component} {...props} />
    </>
  );
}

export default MyApp;
