import { useMenu } from "./useMenu";

export const useFilter = (field) => {
  const menu = useMenu();
  const filterd = menu.filter((item) => item.category === field);
  return filterd;
};
