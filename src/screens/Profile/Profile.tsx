import { Meta } from "components";
import { selectUser, toggleIsAdmin, useAppDispatch, useAppSelector } from "store";

export const Profile = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    user: { isAdmin },
  } = useAppSelector(selectUser);

  return (
    <Meta title="Profile Page">
      <div className="flex flex-col">
        <div className="form-control w-52 p-4">
          <label htmlFor="changeAdmin" className="label cursor-pointer">
            <span className="label-text">Toggle Admin</span>
            <input
              type="checkbox"
              className="toggle-primary toggle"
              checked={isAdmin}
              onChange={() => dispatch(toggleIsAdmin({ isAdmin: !isAdmin }))}
            />
          </label>
        </div>
      </div>
    </Meta>
  );
};

export default Profile;
