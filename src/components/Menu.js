import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import './Menu.css';

function Menu() {
  const[atTop, setAtTop] = useState(true);

  useEffect(() =>{
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  
  const menuClass = `menu ${atTop?'isTop':''}`

  return (
    <div className={menuClass}>
      <div className='menuIn'>
        <Link to={'/'}>홈</Link>
        <Link to={'/setion01'}>인사말</Link>
        <Link to={'/section02'}>기술스텍</Link>
        <Link to={'/section03'}>주요 프로젝트</Link>
        <Link to={'/section04'}>실전경험</Link>
        <Link to={'/coverletter'}>성장과 배움</Link>
      </div>
    </div>
  )
}

export default Menu
