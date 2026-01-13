import React from 'react';
import { BEST_ITEM_DATA } from '../../../../data/BestItemData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BestItemCard from './BestItemCard';
import './scss/BestItemCardSwiper.scss';

const BestItemCardSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop
      navigation={{
        nextEl: '.bgSideBar',
      }}
      autoplay={{
        delay: 3000,
      }}
      centeredSlides={true}
      slidesPerView={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3.6rem',
      }}
      pagination={{
        clickable: true,
        el: '.bestItemWrapPagination',
      }}>
      {BEST_ITEM_DATA.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{
            overflow: 'visible',
            width: '36rem',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <BestItemCard data={item} />
        </SwiperSlide>
      ))}
      <div className="bestItemWrapPagination"></div>
    </Swiper>
  );
};

export default BestItemCardSwiper;
