import React from 'react'
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

   const form = useRef();

  const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_1m1jbpl',
            'template_gzuddb8',
            form.current, 
         'dg9F8j4pHZPDHxkzS'
      
       )
      .then(
        () => {
           alert('Message successfully sent!')
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get n Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact_option'>
            <FiMail/>
            <h4>Email</h4>
            <h5>groushan99@gmail.com</h5>
            <a href='mailto:groushan99@gmail.com' target='__blanck'>Send a Message</a>
          </article>
           <article className='contact_option'>
            <FaFacebookMessenger/>
            <h4>Messenger</h4>
            <h5>Roushan Gupta</h5>
            <a href='https://m.me/100074185130640' target='__blanck'>Send a Message</a>
          </article>
           <article className='contact_option'>
            <FaWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+91 0123456789</h5>
            <a href='https://wa.me/918092973810' target='__blanck'>Send a Message</a>
          </article>
        
           <article className='contact_option'>
            <BsLinkedin/>
            <h4>Linkedin</h4>
            <h5>Roushan Gupta</h5>
            <a href='https://www.linkedin.com/in/groushan/messaging' target='__blanck'>Send a Message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="Email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="11" placeholder='Your Message' required></textarea>
       <button className='btn btn-primary'>Submit</button> </form>
      </div>
    </section>
  )
}

export default Contact