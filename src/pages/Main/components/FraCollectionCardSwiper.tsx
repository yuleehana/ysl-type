import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FRA_COLL_DATA } from '../../../data/fraCollectionData';
import FraCollectionCard from './FraCollectionCards';

const FraCollectionSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      style={{ overflow: 'visible' }}
      slidesPerView={2.5}
      spaceBetween={30}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: '.fraColSwiperBtn',
      }}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
        },
        1400: {
          slidesPerView: 3,
        },
      }}>
      {FRA_COLL_DATA.map((item) => (
        <SwiperSlide key={item.id}>
          <FraCollectionCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FraCollectionSwiper;
