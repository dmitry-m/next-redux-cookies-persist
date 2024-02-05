export const DOMAIN = process.env.NEXT_PUBLIC_API as string;

export const URLS = {
  auth: {
    login: `${DOMAIN}/auth/login`,
    register: `${DOMAIN}/auth/signup`,
    token: `${DOMAIN}/auth/token`,
    changeAdmin: `${DOMAIN}/users/update`,
    users: `${DOMAIN}/users/`,
  },
};

export default URLS;
