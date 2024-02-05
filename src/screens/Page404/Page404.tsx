import { Meta } from "components";

export const Page404 = (): JSX.Element => {
  return (
    <Meta title="404">
      <div className="xs:px-2 s flex flex-col items-center justify-center p-4 text-4xl">
        404 Error<div className="text-base">PAGE NOT FOUND</div>
      </div>
    </Meta>
  );
};

export default Page404;
