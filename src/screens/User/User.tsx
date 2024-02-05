import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { Meta } from "components";
import { useDeleteUserMutation, useGetUserQuery } from "store";
import { H } from "ui";

export const User = (): JSX.Element => {
  const { query, push } = useRouter();
  const { data, isLoading } = useGetUserQuery(query.id as string);
  const [deleteUser, { isLoading: isDeleting, error, isSuccess }] = useDeleteUserMutation();

  useEffect(() => {
    if (error) toast.error((error as { data: { message: string } }).data.message);
    if (!data && !isLoading) {
      if (isSuccess) {
        toast.success("User deleted successfully");
        void push("/admin");
      } else void push("/404");
    }
  }, [isLoading, data, isSuccess, error, isDeleting, push]);

  const handleDelete = (id: number) => {
    void deleteUser(id);
  };

  return (
    <Meta title="User Page">
      <section className="flex flex-col flex-nowrap items-center justify-center sm:mx-auto sm:w-full sm:max-w-lg">
        {data && (
          <>
            <H tag="h1">Account: {data.email}</H>Admin: {data.isAdmin ? "Yes" : "No"}
            <button
              type="button"
              disabled={isDeleting}
              onClick={() => handleDelete(data.id)}
              className={clsx(
                "btn-primary btn ml-auto mt-4",
                {
                  "btn-disabled": isDeleting,
                },
                {
                  "btn-active": !isDeleting,
                },
              )}
            >
              Delete User
            </button>
          </>
        )}
      </section>
    </Meta>
  );
};

export default User;
