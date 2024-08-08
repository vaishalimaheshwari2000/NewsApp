import React from 'react'
import {content} from './content';
import img from './react-portfolio-assets-kevin-main/assets/mid.jpeg';
import {motion} from 'framer-motion';
const about = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      
       <motion.h1 initial = {{x:100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }} className=" my-20 text-center text-4xl ">About <span className='text-cyan-950'>Me</span></motion.h1> 
     <div className="flex flex-wrap">
       <div className='w-full lg:w-1/2 lg:p-8'>
       <div className="flex justify-center">
        <motion.img  initial = {{x:-100,opacity:0}}
  animate={{ x: 0, opacity:1 }}
  transition={{ ease: "easeOut", duration: 2 }} className='rounded-tl-xl rounded-md	' src={img}></motion.img>
        </div>
        </div>
       <div className="w-full lg:w-1/2">
       <div className="flex flex-col items-centre lg:items-start ">
       <motion.p  initial = {{x:100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }}className='my-2 max-w-xl mt-20 py-6 font-thin tracking-lighter '>{content}</motion.p> 
       </div>
       </div>
       
       </div> 
    </div> 
  )
}

export default about
