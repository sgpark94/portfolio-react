import React from "react";
// 리액트를 사용하기 위해 리액트 라이브러리를 불러오고 있다. 이렇게 하면 리액트의 기능과 컴포넌트를 사용할 수 있다.

import { contactText } from "../constants/index";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>
        <div className="contact__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact__text">
          <div className="text">
            {contactText.map((contact, key) => (
              <div key={key}>
                <a href={contact.link} target="_blank" rel="noreferrer">
                  {contact.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__lines bottom" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// Contact 컴포넌트를 외부에서 재사용할 수 있도록 내보내기(export) 설정을 하고 있다. 이렇게 다른 파일에서 해당 컴포넌트를 불러와 사용할 수 있다.
