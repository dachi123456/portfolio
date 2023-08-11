import React from 'react'
import '../styles/contactcomponent.css'
import Form from './Form'
import contactImg from '../assets/steps.png'
import useScrollVisibility from '../hooks/useScrollVisibility'

const ContactComponent = () => {
  const isVisible = useScrollVisibility('contact-container', 0.7);

  return (
    <div id='contact-container' className={isVisible ? 'visible' : ''}> 
      <div className="contact-img-div">
        <h1>Contact <span>me</span></h1>
        <img src={contactImg} alt="" />
      </div>
        <Form />
        
    </div>
  )
}

export default ContactComponent