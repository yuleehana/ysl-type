import React from 'react';
import MainCategory from './components/MainCategory';
import MainFragrance from './components/MainFragrance';
import './MainPage.scss';
import MainFraCollection from './components/MainFraCollection';
import MainPullImg from './components/MainPullImg';
import MainBestItem from './components/MainBestItem';

const MainPage = () => {
  return (
    <div className="pullInner main">
      <div className="main">
        <MainCategory />
        <MainFragrance />
        <MainFraCollection />
        <MainPullImg />
        <MainBestItem />
      </div>
    </div>
  );
};

export default MainPage;
