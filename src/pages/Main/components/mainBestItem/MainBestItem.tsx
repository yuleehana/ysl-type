import React from 'react';
import MainTitle from '../../../../components/MainTitle';
import BestItemCardSwiper from './BestItemCardSwiper';
import BestWrapBG from './BestWrapBG';
import './scss/MainBestItem.scss';

const MainBestItem = () => {
  return (
    <div className="pullInner bestItemWrap">
      <div className="pullInner bestItemBackground">
        <BestWrapBG />
      </div>
      <div className="inner bestItemInner">
        <MainTitle
          mainTitle="Best Items"
          subTitle="시간이 증명한 품격, 가장 많은 사랑을 받은 아이콘을 만나보세요"
        />
        <div className="bestItemSwiperWrap">
          <BestItemCardSwiper />
        </div>
      </div>
    </div>
  );
};

export default MainBestItem;
