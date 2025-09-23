import React from 'react'
import './Section.css';

export default function Section04() {
  return (
    <div className='secFour'>
      <div className='fourWarp'>
        <p>실전 경험 영역</p>
        <h2>실전 프로젝트<br />및 학습 경험에 대해서</h2>
        <div className='practice'>
          <p>[MBC아카데미 컴퓨터교육센터] 프론트엔드 개발과정 수료 | 25.02.19 ~ 08.07</p>
          <ul>
            <li>주요 학습 내용 : <span>HTML / CSS, JacaScript, React, Node.js 까지 기초 전반을 탄탄하게 학습했습니다.</span></li>
            <li>활용 툴 / 환경 : <span>Visual Studio Code, Figma 등 개발 환경과 유사한 툴을 배웠고, GitHub 활용법을 간단히 학습 했습니다.</span></li>
            <li>경험 : <span>팀 프로젝트 진행으로 Figma를 통해 시각적 정보를 빠르게 공유 하였고, 개발과정에선 Visual Studio툴을 적극적으로 이용하였습니다. 이를통해 협업이란 정확한 소통이 빠른 작업의 길이란 걸 배우게 되었습니다.</span></li>
          </ul>
        </div>
        <div className='practice'>
          <p>[개인 프로젝트] 개인 학습 프로젝트 진행 | 25.06.20~08.07</p>
          <ul>
            <li>주요 활동 : <span>리디자인 및 WEB포트폴리오 제작 등 배운 부분을 최대한 활용하고 프로젝트를 구현하며 실력을 다졌습니다.</span></li>
            <li>활용 툴 / 환경 : <span>Figma를 이요한 레이아웃과 프로토타입 제작,   Visual Studio Code로 전반적인 코드 작업을 하였습니다.</span></li>
            <li>성장 : <span>구현하고자 하는 부분을 모두 구현하기 위해 google 검색, Gemini 검색등 다양하게 알아보았고, 부족한 부분은 선생님의 도움을 받아 문제를 해결해 나가는 능력을 길렀습니다.</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
