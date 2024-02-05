import { FullPageLoaderProps } from "./FullPageLoader.props";

export const FullPageLoader = ({ className, ...props }: FullPageLoaderProps): JSX.Element => {
  return <span className="loading loading-dots loading-lg text-primary" />;
};

export default FullPageLoader;
