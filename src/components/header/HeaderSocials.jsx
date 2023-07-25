import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkein.com' target=''><BsLinkedin /></a>
        <a href='https://github.com' target=''><BsGithub /></a>
        <a href='https://dribble.com' target=''><BsDribbble /></a>
    </div>
  )
}

export default HeaderSocials