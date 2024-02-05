import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { selectUser, useAppSelector } from "store";

export const useAuthRedirect = () => {
  const {
    tokens: { accessToken },
  } = useAppSelector(selectUser);
  const [loggedIn, setLoggedIn] = useState(!!accessToken);
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : "/";

  useEffect(() => {
    if (accessToken) {
      void push(redirect);
      setLoggedIn(true);
    } else setLoggedIn(false);
  }, [accessToken, redirect, push]);

  return loggedIn;
};

export default useAuthRedirect;
