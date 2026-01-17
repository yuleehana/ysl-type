import { useEffect, useRef } from 'react';
import MainCategory from './components/mainCategory/MainCategory';
import MainFragrance from './components/mainFragrance/MainFragrance';
import './scss/MainPage.scss';
import MainFraCollection from './components/mainFragrance/MainFraCollection';
import MainPullImg from './components/mainPullImg/MainPullImg';
import MainBestItem from './components/mainBestItem/MainBestItem';
import MainExclusive from './components/mainExclusive/MainExclusive';
import MainVideo from './components/mainVideo/MainVideo';
import { useHeaderHeight } from '../../context/HeaderHeightContext';
import { useHeaderStyle } from '../../context/HeaderStyleContext';

const MainPage = () => {
  const refCategory = useRef<HTMLDivElement | null>(null);
  const headerHeight = useHeaderHeight();

  const videoRef = useRef<HTMLDivElement | null>(null);
  const { setHeaderStyle } = useHeaderStyle();

  useEffect(() => {
    if (!videoRef.current) return;

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        setHeaderStyle(entry.isIntersecting ? 'main' : 'default');
      },
      {
        threshold: 0.3,
      },
    );

    videoObserver.observe(videoRef.current);

    return () => videoObserver.disconnect();
  }, [setHeaderStyle]);

  const handleToCategory = () => {
    if (!refCategory.current) return;

    const top = refCategory.current.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div className="pullInner mainPage">
      <div className="mainPage">
        <div ref={videoRef}>
          <MainVideo onClickScroll={handleToCategory} />
        </div>
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
