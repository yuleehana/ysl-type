import React from 'react';
import type { FraCollection } from '../../../types/FraCollectionType';
import './scss/FraCollectionCards.scss';
import IntensityBar from './IntensityBar';

interface FraCollectionCardsProps {
  data: FraCollection;
}

const FraCollectionCards = ({ data }: FraCollectionCardsProps) => {
  return (
    <div className="fraCard">
      <div className="fraCardInner" key={data.id}>
        <div className="cardInnerLeft">
          <img src={data.img} alt={data.alt} />
        </div>
        <div className="cardInnerRight">
          <div className="cardRightTop">
            <div className="cardTextTitle">
              {data.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            <div className="cardTextSub">
              <span>{data.subTitle}</span>
            </div>
          </div>
          <div className="cardRightBottom">
            <IntensityBar value={data.int} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraCollectionCards;
