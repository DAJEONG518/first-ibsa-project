import React from 'react';
import './Section.css';

export default function Section01() {

  return (
    <div className='secOne'>
      <h2>프론트앤드 개발자가<br />되고 싶은 조다정 입니다</h2>
      <p>안녕하세요! 웹의 ‘얼굴’을 만드는 일에 매료되어 프론트엔드 개발자의 길을 걷기 시작한 조다정 입니다<br />
        협업과 기술을 학습하는 걸 즐기고 사용자에게 최적화된 웹 서비스 제공을 위해 기본기를 탄탄하게 준비하고 있는 중 입니다</p>
      <div>
        <div className='slide left'>
          <div className='group'>
            <img src='./images/p_logo1.png' alt='비주얼스튜디오로고'  />
            <img src='./images/p_logo2.png' alt='리액트로고'  />
           <img src='./images/p_logo3.png' alt='노드로고'  />
           <img src='./images/p_logo4.png' alt='HTML로고'  />
           <img src='./images/p_logo5.png' alt='CSS로고'  />
           <img src='./images/p_logo6.png' alt='자바스크립트로고'  />
          </div>
          <div className='group'>
            <img src='./images/p_logo1.png' alt='비주얼스튜디오로고'  />
            <img src='./images/p_logo2.png' alt='리액트로고'  />
           <img src='./images/p_logo3.png' alt='노드로고'  />
           <img src='./images/p_logo4.png' alt='HTML로고'  />
           <img src='./images/p_logo5.png' alt='CSS로고'  />
           <img src='./images/p_logo6.png' alt='자바스크립트로고'  />
          </div>
        </div>

        <div className='slide right'>
          <div className='group'>
            <img src='./images/p_logo7.png' alt='피그마로고' />
            <img src='./images/p_logo8.png' alt='제미나이로고' />
            <img src='./images/p_logo9.png' alt='포토샵로고' />
            <img src='./images/p_logo10.png' alt='일러스트로고' />
            <img src='./images/p_logo11.png' alt='노트패드로고' />
            <img src='./images/p_logo10.png' alt='일러스트로고' />
          </div>
          <div className='group'>
            <img src='./images/p_logo7.png' alt='피그마로고' />
            <img src='./images/p_logo8.png' alt='제미나이로고' />
            <img src='./images/p_logo9.png' alt='포토샵로고' />
            <img src='./images/p_logo10.png' alt='일러스트로고' />
            <img src='./images/p_logo11.png' alt='노트패드로고' />
            <img src='./images/p_logo10.png' alt='일러스트로고' />
          </div>
        </div>
      </div>
        
    </div>
  )
}
