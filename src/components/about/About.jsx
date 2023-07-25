import React from 'react'
import '../about/about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {ImFolder} from 'react-icons/im'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>
   

    <div className="container about__container">
       <div className="about__me">
<div className="about__me-image">
  <img src={ME} alt="" />
</div>
       </div>
       <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='react__icon'/>
            <h5>Experience</h5>
            <small>2+ years working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='react__icon'/>
            <h5>projects</h5>
            <small>50+ completed</small>
          </article>

          <article className='about__card'>
          <ImFolder className='react__icon'/>
            <h5>Clients</h5>
            <small>70+ clients</small>
          </article>
        </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat vero neque quos voluptas, deserunt fugiat! Ipsum, amet. Consequatur molestiae minima minus fuga dolores unde ex. Perferendis magni eum beatae.</p>
<a href='#contact'className='btn btn-primary'>Let's talk</a>
       </div>
    </div>
    </section>
  )
}

export default About