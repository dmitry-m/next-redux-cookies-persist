import { Home } from "screens";
import { wrapper } from "store";

function HomePage(): JSX.Element {
  return <Home />;
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return { props: {} };
});

export default HomePage;
