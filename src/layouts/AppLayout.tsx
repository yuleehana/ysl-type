import { useLayoutEffect, useRef, useState } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { HeaderHeightContext } from '../context/HeaderHeightContext';
import { HeaderStyleContext } from '../context/HeaderStyleContext';

const AppLayout = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isHeight, setIsHeight] = useState(0);

  const [headerStyle, setHeaderStyle] = useState<'main' | 'default'>('main');

  useLayoutEffect(() => {
    if (headerRef.current) {
      setIsHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <HeaderStyleContext.Provider value={{ headerStyle, setHeaderStyle }}>
        <Header ref={headerRef} />

        <HeaderHeightContext.Provider value={isHeight}>
          <Outlet />
        </HeaderHeightContext.Provider>

        <Footer />
      </HeaderStyleContext.Provider>
    </>
  );
};

export default AppLayout;
