import React from 'react';
import './scss/MainVideo.scss';

interface mainVideoProps {
  onClickScroll: () => void;
}

const MainVideo: React.FC<mainVideoProps> = ({ onClickScroll }) => {
  return (
    <div className="pullInner mainVideoWrap">
      <video src="/images/mainVideo.mov" playsInline muted loop autoPlay />
      <button className="videoBtn" onClick={onClickScroll}>
        <img src="/icon/videoarrow.png" alt="비디오 하단 버튼" />
      </button>
      <div className="bottomRadius"></div>
    </div>
  );
};

export default MainVideo;
