import React from 'react'
import '../header/header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
//import Wallpaper from "../../assets/Wallpaper.jpeg"
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
         <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>The Highpriest</h1>
          <h5 className="text-light">Fullstack developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="" />
          </div>
          <a href='#contact' className='scroll__down'>scroll down</a>
         </div>
    </header>
  )
}

export default Header