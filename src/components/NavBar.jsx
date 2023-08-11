import '../styles/navbar.css'
import React from 'react'
import homeIcon from '../icons/binary-code.png'
import useSmoothScroll from '../hooks/useSmoothScroll';

const NavBar = () => {
    const smoothScrollToSection = useSmoothScroll();
   
  return (
    <header>
        <img src={homeIcon} alt="" onClick={() => smoothScrollToSection('main-container')}/>
        <ul className="sections">
            <li onClick={() => smoothScrollToSection('main-container')}>Home</li>
            <li onClick={() => smoothScrollToSection('about-container')}>About Me</li>
            <li onClick={() => smoothScrollToSection('works-container')}>Works</li>
            <li onClick={() => smoothScrollToSection('contact-container')}>Contact</li>
        </ul>
    </header>
  )
}

export default NavBar