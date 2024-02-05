import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { FullPageLoader, Meta } from "components";
import { useAuthRedirect } from "hooks";
import EmailIcon from "icons/Email.svg";
import LockIcon from "icons/Lock.svg";
import { login, selectUser, useAppDispatch, useAppSelector } from "store";
import { H, Input } from "ui";

import { LogInForm } from "./LogIn.props";

const resolver = classValidatorResolver(LogInForm);

export const LogIn = (): JSX.Element => {
  const loggedIn = useAuthRedirect();
  const dispatch = useAppDispatch();
  const { user, tokens, isLoading } = useAppSelector(selectUser);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<LogInForm>({
    mode: "onBlur",
    resolver,
    defaultValues: { email: "email@email.email", password: "1234568" },
  });

  const submitLogIn: SubmitHandler<LogInForm> = async ({
    email,
    password,
  }: LogInForm): Promise<void> => {
    await dispatch(login({ email, password }));
  };

  if (loggedIn) return <FullPageLoader />;

  return (
    <Meta title="Log In Page">
      <section className="flex flex-col flex-nowrap items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <H tag="h1">Sign in to your account</H>
        <form className="mt-6 w-full" onSubmit={handleSubmit(submitLogIn)}>
          <Input
            type="email"
            placeholder="email@email.com"
            {...register("email")}
            error={errors.email}
            isTouched={touchedFields.email}
            disabled={isLoading}
            Icon={EmailIcon as React.FunctionComponent<React.SVGProps<SVGSVGElement>>}
          />
          <Input
            type="password"
            placeholder="••••••••••"
            {...register("password")}
            error={errors.password}
            isTouched={touchedFields.password}
            disabled={isLoading}
            Icon={LockIcon as React.FunctionComponent<React.SVGProps<SVGSVGElement>>}
          />
          <div className="flex max-w-full justify-end">
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className={clsx(
                "btn-primary  btn ml-auto mt-4",
                {
                  "btn-disabled": !isValid || isLoading,
                },
                {
                  "btn-active": isValid && !isLoading,
                },
              )}
            >
              Log In
            </button>
          </div>
        </form>
      </section>
    </Meta>
  );
};

export default LogIn;
