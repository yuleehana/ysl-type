import React from 'react';
import type { ServiceItemLabel } from '../../../../types/serviceType';
import './scss/ServiceCard.scss';

interface ServiceCardProps {
  data: ServiceItemLabel[];
  activeId: string;
}

const ServiceCard = ({ data, activeId }: ServiceCardProps) => {
  const currentId = data.find((item) => item.id === activeId);
  if (!currentId) return null;
  const currentCard = currentId.card[0];

  return (
    <div className="serviceCard">
      <div className="cardImgBox">
        <img src={currentCard.img} alt={currentCard.title} />
      </div>
      <div className="cardTextBox">
        <div className="cardTop">
          <span>{currentCard.title}</span>
        </div>
        <div className="cardBottom">
          <span className='cardSubTitle'>{currentCard.subTitle}</span>
          <span className='cardInfo'>{currentCard.info}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
