import React from "react";

function About() {
  return (
    <section className="about">
      <h2>ABOUT ME!</h2>
      <div className="flex">
        <img
          src={process.env.PUBLIC_URL + "/images/me.png"}
          alt="프로필 사진"
        />

        <div>
          <ul>
            <li>[자격증]</li>
            <li>웹디자인개발기능사 | 2025.10 취득</li>
            <li>GTQ 1급 | 2025.08 취득</li>
          </ul>
          <ul>
            <li>[MBC아카데미 컴퓨터교육센터] | 25.02.19 ~ 08.07</li>
            <li>
              주요 학습 내용 : HTML / CSS, JacaScript, React, Node.js 까지 기초
              학습
            </li>
            <li> 활용 툴 / 환경 : Visual Studio Code, Figma, GitHub 학습</li>
            <li>
              경험 : 팀 프로젝트 진행으로 Figma를 통해 시각적 정보를 빠르게
              공유, 개발과정에선 Visual Studio툴을 적극적으로 이용. 이를통해
              협업이란 정확한 소통이 빠른 작업의 길이란 걸 배움
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
