import React from 'react';

interface MainTitleProps {
  mainTitle: string;
  subTitle: string;
}

const MainTitle = ({ mainTitle, subTitle }: MainTitleProps) => {
  return (
    <div className="titleInner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        className="mainTitle"
        style={{ fontSize: '3.6rem', fontWeight: '500', color: '#1D1D1D' }}>
        {mainTitle}
      </div>
      <div className="subTitle" style={{ fontSize: '1.6rem', fontWeight: '400', color: '#959595' }}>
        {subTitle}
      </div>
    </div>
  );
};

export default MainTitle;
