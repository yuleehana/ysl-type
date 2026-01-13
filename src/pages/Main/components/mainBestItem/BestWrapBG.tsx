import React from 'react';
import './scss/BestWrapBG.scss';

const BestWrapBG = () => {
  return (
    <div className="bestItemWrapBg">
      <span className="bestItemBgCircle"></span>
      <div className="bestItemBgSideBar">
        <span className="bgSideBar Left"></span>
        <span className="bgSideBar Right"></span>
      </div>
    </div>
  );
};

export default BestWrapBG;
