import React from 'react'
import "./services.css";
import { FiCheckCircle } from "react-icons/fi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
          <h3 >Frontend Development</h3>
          </div>
          <ul className='service__list'>
           <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Maintaining and improving website.</p>
            </li>
             <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Collaborate with back-end developers and web designers to improve usability.</p>
            </li>
             <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Ensure high quality graphic standards and brand consistency.</p>
            </li>
             <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Gathering and evaluating user requirements, in collaboration with product managers and engineers.</p>
            </li>

          </ul>

        </article>
        {/* end of frontend */}

        <article className='service'>
          <div className='service__head'>
          <h3 >Backend Development</h3>
          </div>
          <ul className='service__list'>
           <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Gather and address technical and design requirements.</p>
            </li>
             <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Participate in the entire application lifecycle, focusing on coding and debugging.</p>
            </li>
             <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Manage cutting-edge technologies to improve legacy applications.</p>
            </li>
             <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Data Management Systems and Web Hosting Platforms.</p>
            </li>

          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services