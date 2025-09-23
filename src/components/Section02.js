import React from 'react';
import './Section.css';

export default function Section02() {

  return (
    <div className='secTwo row row-cols-sm-1 row-cols-md-2'>
        <div className='techLeft'>
          <h1>TECH<br />STACK!</h1>
          <p>익숙하게 다루는 기술들 입니다</p>
        </div>
        <div className='techRight'>
          <div className='techSlide'>
            <img src='/images/tech_card01.png' alt='카드1' />
            <img src='/images/tech_card02.png' alt='카드2' />
            <img src='/images/tech_card03.png' alt='카드3' />
            <img src='/images/tech_card04.png' alt='카드4' />
            <img src='/images/tech_card05.png' alt='카드5' />
          </div>
          <div className='techSlide'>
            <img src='/images/tech_card01.png' alt='카드1' />
            <img src='/images/tech_card02.png' alt='카드2' />
            <img src='/images/tech_card03.png' alt='카드3' />
            <img src='/images/tech_card04.png' alt='카드4' />
            <img src='/images/tech_card05.png' alt='카드5' />
          </div>
        </div>
    </div>
  ) 
}
