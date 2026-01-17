import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../../data/headerData';
import './Header.scss';
import { useHeaderStyle } from '../../context/HeaderStyleContext';

const Header = forwardRef<HTMLElement>((_, ref) => {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const { headerStyle } = useHeaderStyle();

  return (
    <header ref={ref} className={`header ${headerStyle === 'main' ? 'main' : 'default'}`}>
      <div className="headerInner inner">
        <div className="headerInnerLeft">
          <div className="headerLeftLogo glassbox">
            <Link to="/">
              <img
                src={
                  headerStyle === 'main'
                    ? '/public/images/mainLogo.svg'
                    : '/public/images/mainLogoBlack.svg'
                }
                alt="mainlogo"
              />
            </Link>
          </div>

          <div className="headerLeftMenu glassbox">
            <nav className={`mainMenu ${activeMenu ? 'open' : ''}`}>
              <ul className="mainMenuList">
                {MENU_DATA.map((menu) => (
                  <li
                    key={menu.id}
                    className="mainMenuItem"
                    onMouseEnter={() => setActiveMenu(menu.id)}>
                    <Link className="mainMenuBtn" to={menu.link}>
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="dropdownArea" onMouseLeave={() => setActiveMenu(null)}>
              {MENU_DATA.map((menu) => (
                <div
                  key={menu.id}
                  className={`dropdownPanel ${activeMenu === menu.id ? 'active' : ''}`}>
                  {menu.columns.map((column, i) => (
                    <div key={i} className="dropdownColumn">
                      {column.title && <span>{column.title}</span>}
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
              ))}
            </div>
          </div>
        </div>
        <div className="headerInnerRight">
          {headerStyle === 'main' ? (
            <div className="sideBar glassbox">
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
          ) : (
            <div className="sideBar glassbox">
              <Link to="/store">
                <img src="/public/icon/mapIconBlack.svg" alt="매장찾기" />
              </Link>
              <Link to="/mypage">
                <img src="/public/icon/userIconBlack.svg" alt="마이페이지" />
              </Link>
              <Link to="/search">
                <img src="/public/icon/searchIconBlack.svg" alt="검색" />
              </Link>
              <Link to="/cart">
                <img src="/public/icon/cartIconBlack.svg" alt="장바구니" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
