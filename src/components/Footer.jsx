import React from 'react'
import '../styles/footer.css'
import userIcon from '../icons/user.svg'
import phoneIcon from '../icons/phone.svg'
import homeIcon from '../icons/home.svg'
import fbIcon from '../icons/icons8-fb.svg';
import instaIcon from '../icons/icons8-insta.svg';
import linkedIcon from '../icons/icons8-linkedin.svg';
import githubIcon from '../icons/icons8-github.svg';
import useSmoothScroll from '../hooks/useSmoothScroll'

const Footer = () => {
  const smoothScrollToSection = useSmoothScroll()
  return (
    <footer className='Footer-container'>
        <ul className="info">
            <li onClick={() => smoothScrollToSection('main-container')}><img src={homeIcon} alt="" /><p>home</p></li>
            <li onClick={() => smoothScrollToSection('about-container')}><img src={userIcon} alt="" /><p>about me</p></li>
            <li onClick={() => smoothScrollToSection('contact-container')}><img src={phoneIcon} alt="" /><p>contact</p></li>
        </ul>
        <div className="socials">
            <span><a href="https://www.facebook.com/dachi.giqorashvili.9/"><img src={fbIcon} alt="" /></a></span>
            <span><a href="https://www.instagram.com/dachig11/"><img src={instaIcon} alt="" /></a></span>
            <span><a href="https://www.linkedin.com/in/dachi-gikorashvili-39a973254/"><img src={linkedIcon} alt="" /></a></span>
            <span><a href="https://github.com/dachi123456"><img src={githubIcon} alt="" /></a></span>
            
        </div>
    </footer>
  )
}

export default Footer