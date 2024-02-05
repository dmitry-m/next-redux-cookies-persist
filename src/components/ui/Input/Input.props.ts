import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isTouched?: boolean;
  error?: FieldError;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
