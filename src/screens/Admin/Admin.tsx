import Link from "next/link";

import { Meta } from "components";
import { useGetUsersQuery } from "store";

import { User } from "types";

const UserBlock = ({ id, email, isAdmin }: { id: number; email: string; isAdmin: boolean }) => (
  <Link
    href={`/users/${id}`}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {email}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className="m-0  text-sm opacity-50">Admin: {isAdmin ? "Yes" : "No"}</p>
  </Link>
);

export const Admin = (): JSX.Element => {
  const { data, error, isLoading, refetch } = useGetUsersQuery(5);

  return (
    <Meta title="Admin Page">
      <div className="flex flex-row flex-wrap content-center justify-evenly py-4">
        {data &&
          data.map(({ id, email, isAdmin }: User) => {
            return <UserBlock key={id} id={id} email={email} isAdmin={isAdmin} />;
          })}
      </div>
    </Meta>
  );
};

export default Admin;
