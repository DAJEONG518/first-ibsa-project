import React from 'react'
import './CoverLetter.css';

function Coverletter() {
  return (
    <div className='coverletter'>
      <h2>끊임없이<br />습득하길 원하는 나의<br /> 자기소개서</h2>
      <div className='cl row row-cols-1 row-cols-sm-2 row-cols-md-3'>
      
        <div className='clOne col'>
          <img src='/images/CL_illust01.png' alt='배경1' />
          <div>
            <p>React 기반의 SPA개발</p>
            <p>단일 페이지 애플리케이션(SPA) 구축하여 매끄럽고 빠른 인터낵션을 제공 할 수 있습니다</p>
          </div>
        </div>

        <div className='clTwo col'>
          <img src='/images/CL_illust02.png' alt='배경2' />
          <div>
            <p>Bootstrap 5 활용</p>
            <p>디바이스를 고려한 반응형 웹사이트 구현 해 안정적인 사용자 경험을 제공 할 수 있습니다</p>
          </div>
        </div>

        <div className='clThree col'>
          <img src='/images/CL_illust03.png' alt='배경3' />
          <div>
            <p>사용자 경험의 중요성!</p>
            <p>과거 매일 애널리틱스 확인 후, 사용자 데이터 기반으로 광고진행 하였고ROAS 2600% / ROI 420% 달성 경험이 있습니다</p>
          </div>
        </div>

        <div className='clFour col'>
          <img src='/images/CL_illust04.png' alt='배경4' />
          <div>
            <p>프론드엔드를 선택 한 이유</p>
            <p>코드를 통해 아이디어가 생생하게 구현되는 매력에 시작하였고 꾸준히 하면서 지금은 사용자에게 가치를 선사하는 목표가 생겼습니다</p>
          </div>
        </div>

        <div className='clFive col'>
          <img src='/images/CL_illust05.png' alt='배경5' />
          <div>
            <p>탄탄한 기본기</p>
            <p>시맨틱 마크업 활용, Glrid와 Flexbox 이용 해 반응형 설계가 가능하며 웹 접근성 지침을 고려 할 수 있습니다</p>
          </div>
        </div>

        <div className='clSix col'>
          <img src='/images/CL_illust06.png' alt='배경6' />
          <div>
            <p>문제 해결 능력</p>
            <p>많은 경험을 하는 과정엔 항상 문제는 있고, 저는 그 과정속엔 해결 할 수 있는 방법이 있다는 걸 터득 했습니다</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Coverletter
