import { ReactNode } from "react";

export interface HProps {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
