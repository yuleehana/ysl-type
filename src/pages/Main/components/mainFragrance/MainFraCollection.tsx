import React from 'react';
import './scss/MainFraCollection.scss';
import FraCollectionSwiper from './FraCollectionCardSwiper';
import MainTitle from '../../../../components/MainTitle';
import MainSubTitle from '../../../../components/MainSubTitle';

const MainFraCollection = () => {
  return (
    <div className="inner fraCollectionWrap">
      <div className="fraColInnerLeft">
        <div className="fraCollectionTitle">
          <MainTitle mainTitle="리브르 컬렉션" />
          <MainSubTitle
            subTitle="피부로 느끼는 자유, 리브르 컬렉션은 타고난 자유를 자신감 넘치게 표현하는 여성을 위한
            향수입니다."
          />
        </div>
        <div className="fraColSwiperBtns">
          <button className="fraColSwiperBtn"></button>
        </div>
      </div>
      <div className="fraColInnerRight">
        <div className="swiperMask">
          <FraCollectionSwiper />
        </div>
      </div>
    </div>
  );
};

export default MainFraCollection;
