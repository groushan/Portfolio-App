import React from 'react'
import "./nav.css";
import { IoHome } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { RiServiceFill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav==='#' ? 'active':''}><IoHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active':''} ><FaRegCircleUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><FaBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav==='#services' ? 'active':''}><RiServiceFill /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiSolidMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav