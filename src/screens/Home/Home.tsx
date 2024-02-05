import Link from "next/link";

import { MENU } from "config";
import { selectUser, useAppSelector } from "store";

const LinkBlock = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => (
  <Link
    href={url}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {`${title} `}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
  </Link>
);

export const Home = (): JSX.Element => {
  const {
    user: { isAdmin },
    tokens: { accessToken },
  } = useAppSelector(selectUser);

  return (
    <div className="xs:px-2 flex w-full max-w-xl items-center justify-between p-4">
      {accessToken ? (
        <LinkBlock url="profile" title="Profile" description="Profile page" />
      ) : (
        <>
          {MENU.map(([title, url, description]) => {
            return <LinkBlock key={title} url={url} title={title} description={description} />;
          })}
        </>
      )}
      {isAdmin && <LinkBlock url="admin" title="Admin" description="Only for admin page" />}
    </div>
  );
};

export default Home;
