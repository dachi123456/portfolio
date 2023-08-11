import React from 'react'
import '../styles/workscomponent.css'
import Slider from './Slider'
import useScrollVisibility from '../hooks/useScrollVisibility';

const WorksComponent = () => {
  const isVisible = useScrollVisibility('works-container', 0.5);
  return (
    <section id='works-container' className={isVisible ? 'visible' : ''}>
      <h1>My recent <span>works</span></h1>
      <Slider />
    </section>
  )
}

export default WorksComponent