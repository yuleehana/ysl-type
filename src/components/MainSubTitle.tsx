import React from 'react';

interface MainSubTitleProps {
  subTitle: string;
}

const MainSubTitle = ({ subTitle }: MainSubTitleProps) => {
  return (
    <div className="subTitle" style={{ fontSize: '1.6rem', fontWeight: '400', color: '#959595' }}>
      {subTitle}
    </div>
  );
};

export default MainSubTitle;
