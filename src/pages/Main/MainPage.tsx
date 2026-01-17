import { useRef } from 'react';
import MainCategory from './components/mainCategory/MainCategory';
import MainFragrance from './components/mainFragrance/MainFragrance';
import './scss/MainPage.scss';
import MainFraCollection from './components/mainFragrance/MainFraCollection';
import MainPullImg from './components/mainPullImg/MainPullImg';
import MainBestItem from './components/mainBestItem/MainBestItem';
import MainExclusive from './components/mainExclusive/MainExclusive';
import MainVideo from './components/mainVideo/MainVideo';
import { useHeaderHeight } from '../../context/HeaderHeightContext';

const MainPage = () => {
  const refCategory = useRef<HTMLDivElement | null>(null);
  const headerHeight = useHeaderHeight();

  const handleToCategory = () => {
    if (!refCategory.current) return;

    const top = refCategory.current.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div className="pullInner main">
      <div className="main">
        <MainVideo onClickScroll={handleToCategory} />
        <div ref={refCategory}>
          <MainCategory />
        </div>
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
