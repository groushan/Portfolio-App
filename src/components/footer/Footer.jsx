import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Roushan Gupta</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="#experience">Experience</a> </li>
                <li><a href="#services">Services</a> </li>
                <li><a href="#portfolio">Portfolio</a> </li>
                {/* <li><a href="#testimonials">Testimonials</a> </li> */}
                <li><a href="#contact">Contact</a> </li>
            </ul>
            <div className="footer__socials">
                <a href='https://linkedin.com' target='_blanck'><FaLinkedin/></a>
          <a href='https://github.com' target='_blanck'> <FaSquareGithub/></a>
          <a href='https://instagram.com' target='_blanck'><FaInstagramSquare/> </a>
      </div>
            <div className="footer__copyright">
                <small>&copy;Roushan Gupta. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer