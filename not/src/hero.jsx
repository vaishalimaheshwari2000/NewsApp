import React from 'react'
import {content} from './content';
import img from './react-portfolio-assets-kevin-main/assets/girlnew.png';
import {motion} from 'framer-motion';
const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
       <div className="flex flex-wrap">
       <div className="w-full lg:w-1/2">
       <div className="flex flex-col items-centre lg:items-start ">
       <motion.h1 
       initial = {{x:-100,opacity:0}}
  animate={{ x: 0, opacity:1 }}
  transition={{ ease: "easeOut", duration: 2 }}
  className=" pb-16 text-4xl lg:mt-16 font-thin tracking-light "
>
      Vaishali Maheshwari</motion.h1>
      <motion.span
  initial = {{x:-100,opacity:0}}
  animate={{ x: 0, opacity:1 }}
  transition={{ ease: "easeOut", duration: 2 }}
  className=" bg-clip-text text-transparent lg:text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-700">
    Frontend Developer
  </motion.span>

       {/* <span className=" bg-clip-text text-transparent lg:text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-700">Frontend Developer</span> */}
       <motion.p  initial = {{x:-100,opacity:0}}
  animate={{ x: 0, opacity:1 }}
  transition={{ ease: "easeOut", duration: 2 }} 
  className=' my-2 max-w-xl py-6 font-thin tracking-lighter '>{content}</motion.p> 
       </div>
       </div>
       <div className='w-full lg:w-1/2 lg:p-8'> 
       <div className="flex justify-center">
        <motion.img  initial = {{x:100,opacity:0}}
  animate={{ x: 0, opacity:1 }}
  transition={{ ease: "easeOut", duration: 2 }} className='rounded-md mt-16' src={img}></motion.img>
        </div>
        </div>
       </div>
    </div>
  )
}

export default hero   