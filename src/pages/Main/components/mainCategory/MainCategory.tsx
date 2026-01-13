import React, { useState } from 'react';
import MainTitle from '../../../../components/MainTitle';
import { Link } from 'react-router-dom';
import './scss/MainCategory.scss';
import type { CategoryItems } from '../../../../types/Category';

const CategoryList: CategoryItems[] = [
  {
    id: 'makeup',
    path: '/makeup',
    img: '/public/images/mainAccord1.png',
    alt: 'makeup',
    text: 'MAKE UP',
  },
  {
    id: 'fragrance',
    path: '/fragrance',
    img: '/public/images/mainAccord2.png',
    alt: 'fragrance',
    text: 'FRAGRANCE',
  },
  {
    id: 'skincare',
    path: '/skincare',
    img: '/public/images/mainAccord3.png',
    alt: 'skincare',
    text: 'SKINCARE',
  },
];

const MainCategory: React.FC = () => {
  const [activeId, setActiveId] = useState<'makeup' | 'fragrance' | 'skincare'>('makeup');

  return (
    <div className="inner categoryWrap">
      <MainTitle
        mainTitle="CATEGORY"
        subTitle="대담한 색, 잊지 못할 향, 그리고 깊이 있는 케어로 매 순간 당신의 아름다움을 완성하세요"
      />

      <div className="categoryAccordList">
        <div className="categoryAccord">
          {CategoryList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`accord ${activeId === item.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveId(item.id)}>
              <span className={`accordText ${activeId === item.id ? 'active' : ''}`}>
                {item.text}
              </span>
              <img src={item.img} alt={item.alt} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
