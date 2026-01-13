import React from 'react';
import './scss/MainPullImg.scss';

const MainPullImg = () => {
  return (
    <div className="pullInner mainPullImgBox">
      <img src="/public/images/mainPullImg1.png" alt="메인 풀스크린 이미지" />
      <div className="inner mainPullImgInner">
        <div className="mainImgTextBox">
          <h2 className='titleText'>YOUR FOREVER IT BOTTLE</h2>
          <div className="subText">
            <span>보석처럼 유리잔에 휘어져 박힌 커다란 황금빛 카상드르.</span>
            <span>매혹적인 골드 체인과 비대칭 블랙 래커 캡이 완벽한 조화를 이룹니다.</span>
            <span>
              새롭게 출시된 100ml 리필과 함께라면, 당신의 리브르 오드 퍼퓸은 영원한 당신의
              액세서리가 될 것입니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPullImg;
