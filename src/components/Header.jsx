import Reac, { useState } from "react";

// import { headerNav} from '../constants'

const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
    // 직접 show 상태를 바꾸는 것이 아닌, setShow 함수를 사용하여 show 상태를 업데이트 한다.
  };
  return (
    <header id='header' role='banner'>
      <div className='header__inner'>
        <div className='header__logo'>
          <a href='/'>
            portfolio<em>vite</em>
          </a>
        </div>
        <nav className={`header__nav ${show ? "show" : ""}`} role='navigation' aria-label='메인 메뉴'>
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href='{nav.url}'>{nav.title}</a>
              </li>
            ))}
          </ul>
          {/* <ul>
            <li>
              <a href='#intro'>intro</a>
            </li>
            <li>
              <a href='#skill'>skill</a>
            </li>
            <li>
              <a href='#site'>site</a>
            </li>
            <li>
              <a href='#port'>portfolio</a>
            </li>
            <li>
              <a href='#contact'>contact</a>
            </li>
          </ul> */}
        </nav>
        <div className='header__nav__mobile' id='headerToggle' aria-controls='primary-menu' aria-expanded={show ? "true" : "false"} role='button' onClick={toggleMenu}>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
