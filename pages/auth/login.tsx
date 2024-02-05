import { LogIn } from "screens";
import { wrapper } from "store";

function LoginPage(): JSX.Element {
  return <LogIn />;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return { props: {} };
});

export default LoginPage;
