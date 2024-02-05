export const IS_SERVER = typeof window === "undefined";
export const IS_CLIENT = typeof window !== "undefined";
export const siteName = "Home Page";
export const MENU = [
  ["Log In", "/auth/login", "Log in to your account"],
  ["Sign Up", "/auth/signup", "Register new account"],
];
export const maxAge = 365 * 24 * 60 * 60;
