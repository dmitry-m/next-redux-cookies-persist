import { User } from "screens";
import { wrapper } from "store";

function UserPage(): JSX.Element {
  return <User />;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return { props: {} };
});

UserPage.auth = "user";

export default UserPage;
