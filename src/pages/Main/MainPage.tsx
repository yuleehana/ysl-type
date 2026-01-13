import React from 'react';
import MainCategory from './components/mainCategory/MainCategory';
import MainFragrance from './components/mainFragrance/MainFragrance';
import './scss/MainPage.scss';
import MainFraCollection from './components/mainFragrance/MainFraCollection';
import MainPullImg from './components/mainPullImg/MainPullImg';
import MainBestItem from './components/mainBestItem/MainBestItem';

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
