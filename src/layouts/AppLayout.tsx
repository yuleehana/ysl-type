import { useLayoutEffect, useRef, useState } from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { HeaderHeightContext } from '../context/HeaderHeightContext';

const AppLayout = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isHeight, setIsHeight] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setIsHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <HeaderHeightContext.Provider value={isHeight}>
        <Outlet />
      </HeaderHeightContext.Provider>
      <Footer />
    </>
  );
};

export default AppLayout;
