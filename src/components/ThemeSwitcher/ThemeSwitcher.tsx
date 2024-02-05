/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import MoonIcon from "icons/Moon.svg";
import SunIcon from "icons/Sun.svg";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = (): JSX.Element => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(theme === "dark" || (theme === "system" && resolvedTheme === "dark"));
  }, [theme]);

  const onThemeClick = () => {
    if (dark) setTheme("light");
    else setTheme("dark");
  };

  return (
    <button type="button" onClick={onThemeClick} className="swap p-4 max-[480px]:p-2">
      <SunIcon
        className={clsx([
          "top-50 left-50 h-5 w-5 fill-current",
          styles.icon,
          { [styles.swap]: !dark },
        ])}
      />
      <MoonIcon
        className={clsx([
          "top-50 left-50 h-5 w-5 fill-current",
          styles.icon,
          { [styles.swap]: dark },
        ])}
      />
    </button>
  );
};

export default ThemeSwitcher;
