import React from "react";

function About() {
  return (
    <section>
      <h2>ABOUT ME!</h2>
      <div className="grid" style={{ gridTemplateColumns: "300px 1fr" }}>
        <img
          src={process.env.PUBLIC_URL + "/images/me.jpg"}
          alt="프로필 사진"
        />
        <div>
          <ul>
            <li>웹디자인개발기능사</li>
            <li>GTQ 1급</li>
            <li>프론트엔드 과정 수료</li>
          </ul>
          <p>
            HTML, CSS, JavaScript 기반의 웹 퍼블리싱과 React 구조 이해를
            바탕으로 성장 중입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
