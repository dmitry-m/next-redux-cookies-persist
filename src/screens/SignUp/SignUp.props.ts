import { IsEmail, Length } from "class-validator";

import { Match } from "utils";

export class SignUpForm {
  @Length(7, 30)
  password: string;

  @Length(7, 30)
  @Match("password", "Password and confirmation password do not match")
  passwordConfirm: string;

  @IsEmail()
  email: string;
}

export default SignUpForm;
