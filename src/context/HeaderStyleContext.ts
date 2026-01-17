import { createContext, useContext } from 'react';

export type HeaderStyle = 'main' | 'default';

interface HeaderStyleContextType {
  headerStyle: HeaderStyle;
  setHeaderStyle: React.Dispatch<React.SetStateAction<HeaderStyle>>;
}

export const HeaderStyleContext = createContext<HeaderStyleContextType | null>(null);

export const useHeaderStyle = () => {
  const ctx = useContext(HeaderStyleContext);

  if (!ctx) throw new Error('useHeaderStyle must be used within HeaderStyleProvider');
  return ctx;
};
