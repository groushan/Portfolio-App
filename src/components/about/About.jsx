import React from 'react'
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div class='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='roushan'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1+ Years </small>
            </article>

             <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Projects</h5>
              <small> 10+</small>
            </article>

             <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Frameworks</h5>
              <small>React</small>
            </article>
          </div>
          <p>
            I'm a software developer with the motto to create something unique and special,
                looking for a role in IT sector with the oppurtunity to work with latest technologies
            on challenging and diverse projects.
            <br />
            I'm confident, curious and perpetually working on improving 
            my skills.
            <br />
            Synopsis about me: A learner, sports fanatic, health concious, photography enthusiast,
             and tech-obsessed...
            
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About