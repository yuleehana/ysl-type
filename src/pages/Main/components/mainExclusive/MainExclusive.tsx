import React, { useState } from 'react';
import MainTitle from '../../../../components/MainTitle';
import ServiceBar from './ServiceBar';
import { SERVICE_DATA } from '../../../../data/serviceData';
import ServiceCard from './ServiceCard';
import './scss/MainExclusive.scss';

const MainExclusive = () => {
  const [activeId, setActiveId] = useState<string>('lipstickService');

  return (
    <div className="pullInner mainExclusiveWrap">
      <div className="inner exWrapInner">
        <div className="exWrapInnerTop">
          <MainTitle mainTitle="EXCLUSIVE SERVICES" />
        </div>
        <div className="exWrapInnerBottom">
          <ServiceBar data={SERVICE_DATA} activeId={activeId} onChange={setActiveId} />
          <ServiceCard data={SERVICE_DATA} activeId={activeId} />
        </div>
      </div>
    </div>
  );
};

export default MainExclusive;
