import React from 'react'
import './Total.css';
import Section01 from './Section01'
import Section02 from './Section02'
import Section03 from './Section03'
import Section04 from './Section04'
import CoverLetter from './CoverLetter'

function Total() {
  return (
    <div>
      <div className='total'>
        <video 
          src='../../public/video/main_1.mp4' muted autoPlay loop 
          style={{
            'width':'100%', 
            'height':'100%', 
            'objectFit':'cover', 
            'filter':'brightness(50%)', /* 이미지 어둡게 */
          }} 
        />
        <h1>😃안녕하세요 신입<br />프론트앤드 개발자 입니다</h1>
      </div>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <CoverLetter />
    </div>
  )
} 

export default Total
