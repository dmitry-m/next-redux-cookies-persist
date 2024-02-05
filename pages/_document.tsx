import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

import { siteName } from "config";

class MyDocument extends Document<{ canonical: string }> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps & { canonical: string }> {
    const [path] = (ctx.asPath === "/" ? "" : (ctx.asPath as string)).split("?");
    const canonical = (process.env.NEXT_PUBLIC_DOMAIN as string) + path;

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, canonical };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head>
          <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="preconnect" href="https://mc.yandex.ru" />
          <link rel="canonical" href={this.props.canonical} />
          <meta property="og:url" content={this.props.canonical} />
          <meta property="og:locale" content="ru_RU" />
          <meta property="og:site_name" content={siteName} />
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#181B1E" />
          <meta name="msapplication-navbutton-color" content="#181B1E" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#181B1E" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
