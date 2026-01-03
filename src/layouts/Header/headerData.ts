import type { MainMenu } from './headerTypes';

export const MENU_DATA: MainMenu[] = [
  {
    id: 'promotion',
    label: 'PROMOTION',
    columns: [
      {
        title: '선물',
        items: [
          { label: '베스트셀러', href: '/promotion/best' },
          { label: '5만원 미만의 선물', href: '/promotion/under5' },
          { label: '10만원 미만의 선물', href: '/promotion/under10' },
          { label: '럭셔리 선물', href: '/promotion/luxury' },
          { label: '전자 상품권', href: '/promotion/giftcard' },
        ],
      },
    ],
  },
  {
    id: 'fragrance',
    label: 'FRAGRANCE',
    columns: [
      {
        title: '여성향수',
        items: [
          { label: '리브르', href: '/fragrance/libre' },
          { label: '몽 파리', href: '/fragrance/monparis' },
        ],
      },
      {
        title: '남성향수',
        items: [
          { label: '와이', href: '/fragrance/y' },
          { label: '라 뉘 드 옴므', href: '/fragrance/lanuit' },
          { label: '마이셀프', href: '/fragrance/myself' },
        ],
      },
    ],
  },
  {
    id: 'makeup',
    label: 'MAKE UP',
    columns: [
      {
        title: '페이스',
        items: [
          { label: '쿠션', href: '/makeup/cushion' },
          { label: '파운데이션', href: '/makeup/foundation' },
          { label: '컨실러', href: '/makeup/concealer' },
          { label: '블러셔/브론저', href: '/makeup/blush' },
        ],
      },
      {
        title: '립',
        items: [
          { label: '립스틱', href: '/makeup/lipstick' },
          { label: '립틴트', href: '/makeup/tint' },
          { label: '립글로스', href: '/makeup/gloss' },
        ],
      },
      {
        title: '아이',
        items: [
          { label: '마스카라', href: '/makeup/mascara' },
          { label: '아이 팔레트', href: '/makeup/palette' },
          { label: '아이라이너', href: '/makeup/eyeliner' },
        ],
      },
    ],
  },
  {
    id: 'skincare',
    label: 'SKINCARE',
    columns: [
      {
        title: '제품 유형별',
        items: [
          { label: '클렌저/토너', href: '/skincare/cleanser' },
          { label: '세럼', href: '/skincare/serum' },
          { label: '에멀전/크림', href: '/skincare/cream' },
          { label: 'UV 프로텍션/베이스', href: '/skincare/uv' },
        ],
      },
      {
        title: '제품 라인별',
        items: [
          { label: '퓨어샷', href: '/skincare/pureshots' },
          { label: '탑 시크릿', href: '/skincare/topsecret' },
          { label: '오 후즈', href: '/skincare/orouge' },
        ],
      },
    ],
  },
  {
    id: 'beautyclub',
    label: 'BEAUTY CLUB',
    columns: [
      {
        items: [
          { label: '입생로랑 뷰티클럽', href: '/beautyclub' },
          { label: '등급별 혜택', href: '/beautyclub/benefit' },
        ],
      },
    ],
  },
];
