export const makeShortString = (string: string, length: number) => {
  const checked = typeof string === "string" ? string : "";
  return checked.length > length ? `${checked.slice(0, length)}...` : checked;
};

export default makeShortString;
