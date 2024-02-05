import { Admin } from "screens";
import { wrapper } from "store";

function AdminPage(): JSX.Element {
  return <Admin />;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return { props: {} };
});

AdminPage.auth = "admin";

export default AdminPage;
