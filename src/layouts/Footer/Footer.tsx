import React from 'react';
import { FOOTER_DATA } from '../../data/footerData';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer pullInner">
      <div className="footerInner inner">
        <div className="footerTop">
          <div className="footerLeft">
            {FOOTER_DATA.map((menu) => (
              <div key={menu.label} className="footerMenuList">
                <span>{menu.label}</span>
                <ul key={menu.id} className="footerMenu">
                  {menu.column.map((f) => (
                    <li key={f.href}>
                      <Link to={f.href}>{f.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footerRight">
            <div className="footerLogo">
              <img src="/public/images/footerLogo.svg" alt="푸터 로고" />
            </div>
            <ul className="snsList">
              <li>
                <Link to="/void">
                  <img src="/public/icon/instagramIcon.png" alt="인스타 아이콘" />
                </Link>
              </li>
              <li>
                <Link to="/void">
                  <img src="/public/icon/twitterIcon.png" alt="트위터 아이콘" />
                </Link>
              </li>
              <li>
                <Link to="/void">
                  <img src="/public/icon/youtubeIcon.png" alt="유튜브 아이콘" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <div className="address">
            <address>
              <span>사업자명: 엘오케이(유)</span>
              <span>|</span>
              <span>대표: 사무엘 티보 부티에 뒤 리테일</span>
              <span>|</span>
              <span>사업 등록번호: 220-81-73483 (사업자정보 확인)</span>
              <span>|</span>
              <span>통신판매업신고: 2012-서울강남-01663</span>
              <span>|</span>
              <span>주소: 서울특별시 강남구 영동대로 517 아셈타워 31층</span>
              <span>고객케어센터: 080-835-0089</span>
            </address>
            <span className="copyRight">
              © 2023 Yves Saint Laurent Cosmetics. All rights reserved.
            </span>
          </div>
          <div className="util">
            <ul>
              <li>
                <Link to="/void">고객문의</Link>
              </li>
              <li>
                <Link to="/void">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/void">이용약관</Link>
              </li>
              <li>
                <Link to="/void">쿠키정책</Link>
              </li>
            </ul>
            <span>© 2025 YSL Beauty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
