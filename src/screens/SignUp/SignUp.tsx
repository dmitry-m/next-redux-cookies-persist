import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { FullPageLoader, Meta } from "components";
import { useAuthRedirect } from "hooks";
import EmailIcon from "icons/Email.svg";
import LockIcon from "icons/Lock.svg";
import { register as registerAction, selectUser, useAppDispatch, useAppSelector } from "store";
import { H, Input } from "ui";

import { SignUpForm } from "./SignUp.props";

const resolver = classValidatorResolver(SignUpForm);

export const SignUp = (): JSX.Element => {
  const loggedIn = useAuthRedirect();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectUser);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<SignUpForm>({
    mode: "onBlur",
    resolver,
    defaultValues: { email: "email@email.email", password: "1234568" },
  });

  const submitSignUp: SubmitHandler<SignUpForm> = async ({
    email,
    password,
  }: SignUpForm): Promise<void> => {
    await dispatch(registerAction({ email, password }));
  };

  if (loggedIn) return <FullPageLoader />;

  return (
    <Meta title="Sign Up Page">
      <section className="flex flex-col flex-nowrap items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <H tag="h1">Register new account</H>
        <form className="mt-6 w-full" onSubmit={handleSubmit(submitSignUp)}>
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
          <Input
            type="password"
            placeholder="••••••••••"
            title="Confirm password"
            {...register("passwordConfirm")}
            error={errors.passwordConfirm}
            isTouched={touchedFields.passwordConfirm}
            disabled={isLoading}
            Icon={LockIcon as React.FunctionComponent<React.SVGProps<SVGSVGElement>>}
          />
          <div className="flex max-w-full justify-end">
            <button
              type="submit"
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
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </Meta>
  );
};

export default SignUp;
