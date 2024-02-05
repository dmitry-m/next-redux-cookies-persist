import Head from "next/head";

import { siteName } from "config";
import { clearText } from "utils";

import { MetaProps } from "./Meta.props";

export const Meta = ({ title, description, image = "", children }: MetaProps): JSX.Element => {
  const siteTitle = title || siteName;

  return (
    <>
      {description ? (
        <Head>
          <title itemProp="headline">{siteTitle}</title>
          <meta itemProp="description" name="description" content={clearText(description, 152)} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={clearText(description, 197)} />
        </Head>
      ) : (
        <Head>
          <title>{siteTitle}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      )}
      {children}
    </>
  );
};

export default Meta;
