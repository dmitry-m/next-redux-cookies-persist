import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}
