import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ThemeSwitcherProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  size?: "l" | "m" | "s";
}
