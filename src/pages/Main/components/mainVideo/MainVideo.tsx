import React from 'react';
import './scss/MainVideo.scss';

const MainVideo = () => {
  return (
    <div className="pullInner mainVideoWrap">
      <video src="/public/images/mainVideo.mov" playsInline muted loop autoPlay />
      <div className="videoBtn">
        <img src="/public/icon/videoarrow.png" alt="비디오 하단 버튼" />
      </div>
      <div className="bottomRadius"></div>
    </div>
  );
};

export default MainVideo;
