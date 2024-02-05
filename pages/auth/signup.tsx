import { SignUp } from "screens";
import { wrapper } from "store";

function SignUpPage(): JSX.Element {
  return <SignUp />;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return { props: {} };
});

export default SignUpPage;
