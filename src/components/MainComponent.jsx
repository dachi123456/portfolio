import React, { useEffect } from 'react'
import Typed from 'typed.js';
import '../styles/maincomponent.css'
import sits from '../assets/sits.png'
import useScrollVisibility from '../hooks/useScrollVisibility';
import useSmoothScroll from '../hooks/useSmoothScroll';

const MainComponent = () => {
    const isVisible = useScrollVisibility('main-container', 0.1)
    const smoothScrollToSection = useSmoothScroll();
    useEffect(() => {
        const strings = ['FRONTEND', 'REACTJS',];
    
        const options = {
          strings: strings,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true,
        };
    
        const typed = new Typed('.move-text', options);
    
        return () => {
          typed.destroy();
        }
      }, [])

  return (
    <section id='main-container' className={isVisible ? 'visible' : ''}>
        <div className="text-div">
            <h1>I AM <span className='move-text'></span></h1>
            <h1>DEVELOPER</h1>
            <div className="btns-div">
                <button className='hire-btn' onClick={() => smoothScrollToSection('contact-container')}>Contact me</button>

                <a href="/Dachi gikorashvili.pdf" download>
                    <button className='cv-btn'>Download CV</button>
                </a>
                
            </div>
        </div>

        <div className="img-div">
            <img src={sits} alt="" />
        </div>
    </section>
  )
}

export default MainComponent