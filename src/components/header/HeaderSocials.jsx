import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href='https://linkedin.com' target='_blanck'><FaLinkedin/></a>
          <a href='https://github.com' target='_blanck'> <FaSquareGithub/></a>
          <a href='https://instagram.com' target='_blanck'><FaInstagramSquare/> </a>
      </div>
  )
}

export default HeaderSocials