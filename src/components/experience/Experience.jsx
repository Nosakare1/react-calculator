import React from 'react'
import '../experience/experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
      <div className="experience__frontend">
    <h3>FrontEnd Development</h3>
    <div className="experience__content">
       <article className="experience__details">
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>HTML</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>

       <article className="experience__details">
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>CSS</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>
       

       <article className="experience__details">
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>JavaScript</h4>
       <small className='text-light'>Intermediate</small>
       </div>
       </article>
      

       <article className="experience__details">
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>React</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>

       <article className="experience__details">
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>Bootstrap</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>

    </div>
</div>
<div className="experience__backend">
<h3>BackEnd Development</h3>
    <div className="experience__content">
       <article className="experience__details">
        
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>MongoDB</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>

       <article className="experience__details">
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>NodeJs</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>

       <article className="experience__details">
        
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
       <h4>Python</h4>
       <small className='text-light'>Intermediate</small>
       </div>
       </article>

       <article className="experience__details">
       <BsFillPatchCheckFill className='experience__detail-icon'/>
       <div>
         <h4>MySql</h4>
       <small className='text-light'>Experienced</small>
       </div>
       </article>

       <article className="experience__details">
        
       <BsFillPatchCheckFill className='experience__detail-icon'  />
       <div>
       <h4>PHP</h4>
       <small className='text-light'>Intermediate</small>
       </div>
       </article>
    </div>
        </div>
      </div>
      
    </section>
  )
}

export default experience