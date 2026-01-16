import React from 'react';
import MainCategory from './components/mainCategory/MainCategory';
import MainFragrance from './components/mainFragrance/MainFragrance';
import './scss/MainPage.scss';
import MainFraCollection from './components/mainFragrance/MainFraCollection';
import MainPullImg from './components/mainPullImg/MainPullImg';
import MainBestItem from './components/mainBestItem/MainBestItem';
import MainExclusive from './components/mainExclusive/MainExclusive';
import MainVideo from './components/mainVideo/MainVideo';

const MainPage = () => {
  return (
    <div className="pullInner main">
      <div className="main">
        <MainVideo/>
        <MainCategory />
        <MainFragrance />
        <MainFraCollection />
        <MainPullImg />
        <MainBestItem />
        <MainExclusive />
      </div>
    </div>
  );
};

export default MainPage;
