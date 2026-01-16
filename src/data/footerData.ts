import type { FooterTitle } from '../types/footerType';

export const FOOTER_DATA: FooterTitle[] = [
  {
    id: 'category',
    label: '카테고리',
    column: [
      { label: '페이스 메이크업', href: '/makeup/face' },
      { label: '립 메이크업', href: '/makeup/lip' },
      { label: '아이 메이크업', href: '/makeup/eye' },
      { label: '여성향수', href: '/fragrance/women' },
      { label: '남성향수', href: '/fragrance/men' },
      { label: '스킨케어', href: '/skincare' },
    ],
  },
  {
    id: 'myAccount',
    label: '내 계정',
    column: [
      { label: '회원가입/로그인', href: '/auth' },
      { label: '마이페이지', href: '/mypage' },
      { label: '주문 목록', href: '/mypage/order/orderlist' },
      { label: '리뷰', href: '/mypage/review' },
      { label: '나의 등급', href: '/mypage/grade' },
    ],
  },
  {
    id: 'cs',
    label: '고객문의',
    column: [
      { label: '고객케어센터', href: '/cs/faq' },
      { label: '배송/반품/교환', href: '/mypage/order/claim' },
    ],
  },
];
