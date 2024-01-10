import React from "react";

// import logo01 from "../assets/img/logo_github.png";
// import { ReactComponent as Logo02 } from "../assets/img/logo_tistory.svg";
// import logo03 from "../assets/img/logo_instagram.png";

const footerText = [
  {
    title: "github",
    desc: "사이드 프로젝트 및 포트폴리오에 대한 정보들이 기록되어 있습니다.",
    // logo: logo01,
    link: "https://github.com/sgpark94",
  },
  {
    title: "blog",
    desc: "개인적인 개발 기록 및 업무와 관련된 정보들을 남기고 있습니다.",
    // logo: Logo02,
    link: "https://sgpark94.tistory.com/",
  },
  {
    title: "instagram",
    desc: "저의 일상생활에 대한 기록들이 담겨져 있습니다.",
    // logo: logo03,
    link: "https://www.instagram.com/__remain___/",
  },
];

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__text">
          <span>seulgi park</span>
          <span>© psk</span>
        </div>
        <div className="footer__info">
          <h3>social</h3>
          <ul>
            {footerText.map((footer, key) => (
              <li key={key}>
                {/* <img src={footer.logo} alt={footer.title} /> */}
                <a href={footer.link}>{footer.title}</a>
                <em>{footer.desc}</em>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__right">
          © 2024 seulgi Park
          <br />이 사이트는 React.js를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
