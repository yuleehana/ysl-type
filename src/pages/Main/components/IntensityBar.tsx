import React from 'react';
import './scss/IntensityBar.scss';

interface IntensityBarProps {
  value: 1 | 2 | 3 | 4 | 5;
}

const IntensityBar = ({ value }: IntensityBarProps) => {
  const percentage = (value / 5) * 100;

  return (
    <div className="intBox">
      <span className="intText">Intensity</span>
      <div className="intBar">
        <div className="intBarFill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default IntensityBar;
