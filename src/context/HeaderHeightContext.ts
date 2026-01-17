import { createContext, useContext } from 'react';

export const HeaderHeightContext = createContext<number>(0);

export const useHeaderHeight = () => {
  return useContext(HeaderHeightContext);
};
