import React from 'react'
import '../contact/contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import{RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   
    emailjs.sendForm('service_btoevby', 'template_by8lpcn', form.current, '_4RC8eftMifgWz2PD')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
          <AiOutlineMail className='contact__option-icon' />
             <h4>Email</h4>
             <h5>Iamnosakare@gmail.com</h5>
             <a target='_blank' href= 'mailto:iamnosakare@gmail.com'>Send a Message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
             <h4>Messenger</h4>
             <h5>Highpriest</h5>
             <a target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
             <h4>Whatsapp</h4>
             <h5>+2348147032984</h5>
             <a target='_blank' href= 'https://api.whatsapp.com/send?phone"+2348147032984"' >Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact