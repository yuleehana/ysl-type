import React from 'react';

interface MainTitleProps {
  mainTitle: string;
}

const MainTitle = ({ mainTitle }: MainTitleProps) => {
  return (
    <div className="mainTitle" style={{ fontSize: '3.6rem', fontWeight: '500', color: '#1D1D1D' }}>
      {mainTitle}
    </div>
  );
};

export default MainTitle;
