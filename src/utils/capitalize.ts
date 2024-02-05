export const capitalize = (name: string | undefined) =>
  name && `${name.charAt(0)?.toUpperCase()}${name.slice(1)}`;

export default capitalize;
