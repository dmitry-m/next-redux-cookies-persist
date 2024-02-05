import { Profile } from "screens";
import { wrapper } from "store";

function ProfilePage(): JSX.Element {
  return <Profile />;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return { props: {} };
});

ProfilePage.auth = "user";

export default ProfilePage;
