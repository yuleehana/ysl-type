import React from 'react';
import MainCategory from './components/MainCategory';
import MainFragrance from './components/MainFragrance';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="pullInner main">
      <div className="inner main">
        <MainCategory />
        <MainFragrance />
      </div>
    </div>
  );
};

export default MainPage;
