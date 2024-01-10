import React, { useEffect, useRef } from "react";
// useEffect | 컴포넌트가 렌더링된 후에 실행되는 부수 효과를 정의하는 코드 블록.
// useEffect 내부에서는 gsap 라이브러리의 ScrollTrigger를 등록하고, 가로 스크롤 애니메이션을 구성함.
// useRef | 함수형 컴포넌트에서 DOM 요소에 접근하거나, 특정 값들을 기억하고 관리하는 기능을 제공함. useRef를 사용하면 클래형 컴포넌트에서의 this와 비슷한 역할 할 수 있음.
import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
  const horizontalRef = useRef(null);
  // horizontalRef 라는 변수를 생성하고 useRef 훅으로 초기화 진행.
  // 이 변수는 가로 스크롤이 적용될 부모 요소를 참조하는데 사용됨.
  const sectionsRef = useRef([]);
  // 이 배열은 각 포트폴리오 아이템 요소들을 참조하는데 사용됨.

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    let scrollTween = gsap.to(sections, {
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);
  return (
    <section id="port">
      <div className="port__inner">
        <div className="port__title">
          portfolio <em>포폴 작업물</em>
        </div>
        <div className="port__wrap">
          {portText.map((port, key) => (
            <article className={`port__item p${key + 1}`} key={key}>
              <span className="num">{port.num}.</span>
              <a
                href={port.code}
                target="_blank"
                className="img"
                rel="noreferrer"
              >
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a
                href={port.view}
                target="_blank"
                className="site"
                rel="noreferrer"
              >
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
