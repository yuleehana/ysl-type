import React from 'react';
import MainCategory from './components/MainCategory';
import MainFragrance from './components/MainFragrance';
import './MainPage.scss';
import MainFraCollection from './components/MainFraCollection';

const MainPage = () => {
  return (
    <div className="pullInner main">
      <div className="inner main">
        <MainCategory />
        <MainFragrance />
        <MainFraCollection /> 
      </div>
    </div>
  );
};

export default MainPage;
