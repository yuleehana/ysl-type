import React from 'react';
import './scss/BestItemCard.scss';
import type { BestItem } from '../../../types/BestItem';

interface BestItemCardProps {
  data: BestItem;
}

const BestItemCard = ({ data }: BestItemCardProps) => {
  return (
    <div className="bestItemCard">
      <div className="bestItemCardInner" key={data.id}>
        <div className="cardInnerTop">
          <div className="cardItemImgBox">
            <img src={data.itemImg} alt={data.alt} />
          </div>
          <span className="cardItemShadow"></span>
        </div>
        <div className="cardInnerBottom">
          <div className="cardItemTitle">
            <span>{data.title}</span>
          </div>
          <div className="cardItemPrice">
            <span>{data.price.toLocaleString()}</span>
            <span>원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestItemCard;
