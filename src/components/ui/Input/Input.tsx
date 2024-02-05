import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

import { capitalize } from "utils";

import { InputProps } from "./Input.props";

export const Input = forwardRef(
  (
    { className, error, name, id, isTouched, title, Icon, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <div className="relative mb-7 h-10 w-full min-w-[200px]">
        {Icon ? (
          <Icon
            className={clsx(
              "absolute left-2.5 top-2/4 grid h-5 w-5 -translate-y-2/4 place-items-center fill-primary",
              { "!fill-red-500": error },
              { "!fill-green-500": isTouched && !error },
            )}
          />
        ) : null}
        <input
          id={id}
          name={name}
          className={clsx(
            "peer h-full w-full rounded-[7px] border border-gray-800 border-t-transparent bg-transparent py-2.5 pl-9 pr-3 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-gray-800 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50 dark:border-gray-400 dark:border-t-transparent dark:text-gray-400",
            {
              "!border-red-500 !border-t-transparent text-red-500 placeholder-shown:!border-t-red-500 focus:border-red-500 placeholder-shown:focus:!border-t-transparent dark:text-red-500":
                error,
            },
            {
              "!border-green-500 !border-t-transparent text-green-500 placeholder-shown:!border-t-green-500 focus:border-green-500 placeholder-shown:focus:!border-t-transparent dark:text-green-500":
                isTouched && !error,
            },
          )}
          ref={ref}
          {...props}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={clsx(
            "pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[12px] leading-tight text-primary transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-3 before:rounded-tl-md before:border-l before:border-t before:border-gray-800 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-gray-800 after:transition-all peer-placeholder-shown:text-[17px] peer-placeholder-shown:leading-[3] peer-placeholder-shown:before:w-9 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:w-3 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-gray-800 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-gray-800 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary dark:text-gray-400 dark:text-gray-400 dark:before:border-gray-400 dark:after:border-gray-400 dark:peer-focus:text-gray-400 dark:before:peer-focus:border-gray-400 dark:after:peer-focus:border-gray-400",
            {
              "border-red-500 !text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:!border-red-500 peer-focus:after:!border-red-500 dark:text-red-500 dark:before:border-red-500 dark:after:border-red-500 peer-focus:dark:text-red-500":
                error,
            },
            {
              "border-green-500 !text-green-500 before:border-green-500 after:border-green-500 peer-focus:text-green-500 peer-focus:before:!border-green-500 peer-focus:after:!border-green-500 dark:text-green-500 dark:before:border-green-500 dark:after:border-green-500 peer-focus:dark:text-green-500":
                isTouched && !error,
            },
          )}
        >
          {title || capitalize(name)}
        </label>
        {error && (
          <span role="alert" className="absolute -bottom-4 left-0 text-[11px] text-red-500">
            {capitalize(error.message)}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
