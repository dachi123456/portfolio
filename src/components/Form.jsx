import React, { useRef, useState } from 'react';
import './form.css';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [emailChecker, setEmailChecker] = useState(true);
  const [formStatus, setFormStatus] = useState(null);
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputMessageValue, setInputMessageValue] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1e09n7y', 'template_9o4f9gf', form.current, 'EiS_odSWRLoDiifUk')
      .then((result) => {
        console.log(result.text);
        setFormStatus('success');
        resetInputs();
        setTimeout(() => setFormStatus(null), 3000);
      })
      .catch((error) => {
        console.log(error.text);
        setFormStatus('error');
        setTimeout(() => setFormStatus(null), 4000);
      });
  };

  const onNameChange = (e) => {
    setInputNameValue(e.target.value);
  };

  const onEmailChange = (e) => {
    setInputEmailValue(e.target.value);
    checkEmail(e); 
  };

  const onMessageChange = (e) => {
    setInputMessageValue(e.target.value);
  };

  const resetInputs = () => {
    setInputNameValue('');
    setInputEmailValue('');
    setInputMessageValue('');
    setEmailChecker(true);
  };

  const checkEmail = (e) => {
    const emailValue = e.target.value;
    setEmailChecker(emailValue.includes('@'));
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-container">
        <div className="name-div">
          <label>your name</label>
          <input type="text" placeholder="name" name="user_name" onChange={onNameChange} value={inputNameValue} />
        </div>
        <div className="gmail-div">
          <label>your email</label>
          <input
            type="email"
            placeholder="email"
            name="user_email"
            onChange={onEmailChange}
            value={inputEmailValue}
          />
          {!emailChecker && <div className="error-div">enter a valid email address</div>}
        </div>
      </div>
      <div className="message-div">
        <label>your message</label>
        <textarea
          id=""
          cols="30"
          rows="10"
          name="message"
          onChange={onMessageChange}
          value={inputMessageValue}
        ></textarea>
      </div>
      <input type="submit" value="Send" className="send-btn" disabled={!emailChecker} />
      {formStatus === 'success' && <div className="success-sent">Form sent successfully!</div>}
      {formStatus === 'error' && <div className="invalid-sent">Something went wrong. Please try again.</div>}
    </form>
  );
};

export default Form;