import React from 'react'
import '../styles/aboutcomponent.css'
import compImg from '../assets/lied.png'
import useScrollVisibility from '../hooks/useScrollVisibility';

const AboutComponent = () => {
    const isVisible = useScrollVisibility('about-container', 0.7);

  return (
    <section id='about-container' className={isVisible ? 'visible' : ''}>
        <div className="about-text-div">
            <h1>About <span>me</span></h1>
            <p>I am a highly motivated and enthusiastic
                beginner front-end developer with 1 year in
                programming. With a foundation in HTML, Css, JavaScript, TypeScript, React. I am eager
                to apply my skills and learn new technologies
            </p>
        </div>
        <div className="about-img-div">
            <img src={compImg} alt="" />
        </div>
    </section>
  )
}

export default AboutComponent