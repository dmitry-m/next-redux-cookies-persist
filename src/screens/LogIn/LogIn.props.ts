import { IsEmail, Length } from "class-validator";

export class LogInForm {
  @Length(6, 30)
  password: string;

  @IsEmail()
  email: string;
}

export default LogInForm;
