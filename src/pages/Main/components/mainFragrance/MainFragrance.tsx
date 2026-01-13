import React from 'react';
import { Link } from 'react-router-dom';
import './scss/MainFragrance.scss';

const MainFragrance = () => {
  return (
    <div className="inner libreWrapBg">
      <div className="libreBgImg">
        <span>
          <img src="/public/images/mainLibre1.png" alt="flower1" />
        </span>
        <span>
          <img src="/public/images/mainLibre2.png" alt="flower2" />
        </span>
        <span>
          <img src="/public/images/mainLibre3.png" alt="flower3" />
        </span>
      </div>

      <div className="libreWrap">
        <div className="libreWrapLeft">
          <div className="libreLeftTextBox">
            <span>LIBRE</span>
            <span>EAU DE</span>
            <span>PARFUM</span>
          </div>
          <div className="libreLeftImgBox">
            <img src="/public/images/mainLibre.png" alt="mainLibre" />
          </div>
        </div>

        <div className="libreWrapRight">
          <div className="libreRightTop">
            <div className="libreTitle">
              <span>입생로랑 리브르</span>
            </div>
            <div className="libreSub">
              <span className='subBlack'>열정적이면서도 도도한 매력의 카리스마 넘치는 플로럴 향</span>
              <span className='subGrey'>관능적인 오렌지 블라썸 향과 차분한 라벤더 향의 조화</span>
            </div>
          </div>
          <div className="libreRightBottom">
            <Link to="/fragrance" className="libreMoreBtn">
              <span className='moreText'>More</span>
              <span className="moreArrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFragrance;
