import React from 'react'
import logo from '../react-portfolio-assets-kevin-main/assets/logonew.png'
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const navbar = () => {
  return (
   
    <nav className='flex bg-red-mb mb-200 items-centre justify-between '>
         {/* <p>hcjgvmjuhbi.</p> */}
     <div className="flex justify-start">
      {/* <img src={logo} alt=""/> */}
    </div>
    <div className="flex justify-centre m-8 items-centre gap-4 text-2xl">
    
    <SiLinkedin />
    <FaGithub />
    <FiInstagram />
    <BsTwitterX />

    </div> 
    </nav>
   
  )
} 

export default navbar;
