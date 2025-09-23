import React from 'react'
import './Section.css';

export default function Section03() {
  const data=[
    {id:1,
        src:"https://github.com/DAJEONG518/first-ibsa-project/blob/main/public/images/p_card01.png?raw=true",
        title : "WEB  프로젝트 1 : 리뉴얼 프로젝트",
        subTitle : "웹 표준 및 접근성 준수",
        info : "시맨틱 마크업을 활용, Grid와 Flexbox를 이용한 반응형 설계했으며 웹 접근성 지침을 고려하여 사용자가 쉽게 접근할 부분에 중점을 두었습니다",
    },
    {id:2,
        src:"https://github.com/DAJEONG518/first-ibsa-project/blob/main/public/images/p_card02.png?raw=true",
        title : "WEB  프로젝트 1 : 리뉴얼 프로젝트",
        subTitle : "jQuery를 활용한 사용자 경험 제공",
        info : "다양한 플러그인(Mousewheel, Transit, UI)을 활용했으며, 섹션별 FadeIn, mouseover 효과로 이미지 및 텍스트 전환을 통해 동적 사이트 구축을 했습니다",
    },
    {id:3,
        src:"https://github.com/DAJEONG518/first-ibsa-project/blob/main/public/images/p_card03.png?raw=true",
        title : "WEB  프로젝트 1 : 리뉴얼 프로젝트",
        subTitle : "모듈화된 파일 관리로 효율성 구축",
        info : "index.html 파일을 메인으로 메뉴, 서브페이지 등 분리하였고, css 파일 또한 세분화 하여 프로젝트의 가독성을 높여 유지보수를 용이하게 했습니다",
    },
    {id:4,
        src:"https://github.com/DAJEONG518/first-ibsa-project/blob/main/public/images/p_card04.png?raw=true",
        title : "WEB  프로젝트 2 : 자기소개 웹사이트",
        subTitle : "React 기반의 SPA개발 & 페이지 관리",
        info : "단일 페이지 애플리케이션(SPA)으로 구축하여 매끄럽고 빠른 인터랙션을 제공하며, 최신 React 버전을 활용하여 성능 최적화 및 개발 트랜드를 따랐습니다",
    },
    {id:5,
        src:"https://github.com/DAJEONG518/first-ibsa-project/blob/main/public/images/p_card05.png?raw=true",
        title : "WEB  프로젝트 2 : 자기소개 웹사이트",
        subTitle : "반응형 웹 개발 Bootstrap 5 활용",
        info : "디바이스를 고려한 반응형 웹사이트 구현해 안정적인 사용자 경험을 제공하도록 했습니다. 이에 대한 기본적인 지식을 가지고 있는것을 보여드립니다",
    },
    {id:6,
        src:"https://github.com/DAJEONG518/first-ibsa-project/blob/main/public/images/p_card06.png?raw=true",
        title : "WEB  프로젝트 2 : 자기소개 웹사이트",
        subTitle : "체계적 컴포넌트 및 유지보수 용이성",
        info : "추 후 유지보수 효율성을 높이고 이후 기능 확장을 위해 React 컴포넌트 모듈화와 CSS모듈화로 코드 독립성과 재사용성을 극대화 했습니다 ",
    },
    {id:7,
        src:"https://github.com/DAJEONG518/first-ibsa-project/blob/main/public/images/p_card07.png?raw=true",
        title : "WEB  프로젝트 2 : 자기소개 웹사이트",
        subTitle : "효율적 개발환경과 품질높은 코드관리",
        info : "Node.js 기반의 react-scripts 5.0.1을 활용하여 기본적인 개발 환경을 효율적으로 관리 했으며, 컴포넌트 테스트 기반을 마련해 안정적인 코드를 제공했습니다",
    },
    ];
  return (
    <div className='secThree'>
      <h1>제가 구현한<br /> WEB  프로젝트 입니다</h1>
      {data.map((props) => (
        <div className='pp row row-cols-1 row-cols-md-3'>
          <div className='pText'>
            <span>{props.title}</span>
            <h2>{props.subTitle}</h2>
            <p>{props.info}</p>
          </div>
          <img src={props.src} alt={props.title}/>
        </div>
      ))}
    </div>
  )
}
