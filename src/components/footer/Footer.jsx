import React from 'react'
import '../footer/footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const footer = () => {
  return (
    <footer id='footer'>
      
      <a href='#' className='footer__logo'>HIGHPRIEST</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiece</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FiFacebook /></a>
        <a href="https://twitter.com/iamnosakare" target='_new'><BsTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; HIGHRIEST All right reserved
        </small>
      </div>
    </footer>
  )
}

export default footer