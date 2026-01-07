import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../../data/headerData';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="headerInner inner">
        <div className="headerInnerLeft">
          <div className="headerLeftLogo glassbox">
            <Link to="/">
              <img src="/public/images/mainLogo.svg" alt="mainlogo" />
            </Link>
          </div>

          <div className="headerLeftMenu glassbox">
            <nav className="gnb">
              <ul className="gnbList">
                {MENU_DATA.map((menu) => (
                  <li key={menu.id} className="gnbItem">
                    <button className="gnbTitle">{menu.label}</button>

                    <div className="dropdown">
                      {menu.columns.map((column, colIndex) => (
                        <div key={colIndex} className="dropdownColumn">
                          {column.title && <h4>{column.title}</h4>}
                          <ul>
                            {column.items.map((item) => (
                              <li key={item.href}>
                                <Link to={item.href}>{item.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="headerInnerRight">
          <div className="sideBar">
            <Link to="/store">
              <img src="/public/icon/mapIconWh.png" alt="매장찾기" />
            </Link>
            <Link to="/mypage">
              <img src="/public/icon/userIconWh.png" alt="마이페이지" />
            </Link>
            <Link to="/search">
              <img src="/public/icon/searchIconWh.png" alt="검색" />
            </Link>
            <Link to="/cart">
              <img src="/public/icon/cartIconWh.png" alt="장바구니" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
