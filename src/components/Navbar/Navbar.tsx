/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Link from "next/link";
import { useRouter } from "next/router";

import { ThemeSwitcher } from "components";
import { MENU } from "config";
import User from "icons/User.svg";
import { logout, selectUser, useAppDispatch, useAppSelector } from "store";

export const Navbar = (): JSX.Element => {
  const { push } = useRouter();
  const {
    tokens: { accessToken },
  } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const logOutHandle = async () => {
    await dispatch(logout());
    await push("/auth/login");
  };

  return (
    <nav className="navbar rounded-box self-start bg-base-100 shadow-xl">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case max-[480px]:px-2">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ThemeSwitcher />
        {!accessToken && (
          <div className="flex-none">
            <ul className="menu menu-horizontal max-[480px]:px-0">
              {MENU.map(([title, url, description]) => {
                return (
                  <li key={title}>
                    <Link href={url} title={description}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {accessToken && (
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="indicator">
                <User className="h-5 w-5" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button type="button" onClick={logOutHandle}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
