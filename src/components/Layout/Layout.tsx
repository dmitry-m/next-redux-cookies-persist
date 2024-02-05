import { Inter } from "next/font/google";

import { Navbar } from "components";

import styles from "./Layout.module.scss";

import { LayoutProps } from "./Layout.props";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <div className={`${styles.body} ${inter.className}`}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
