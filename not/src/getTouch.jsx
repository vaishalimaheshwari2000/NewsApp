import React from 'react'
import {motion} from 'framer-motion';
const getTouch = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 mt-15">
            
    <motion.h1 className=" my-20 text-center text-4xl text-gray-500" initial = {{x:100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }}>Get Touch</motion.h1> 
    <motion.p className="my-10 text-center text-gray-500" initial = {{x:-100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }}>4/180, kacheri Ghat Agra</motion.p>
    <motion.p initial = {{x:100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }} className="my-10 text-center text-gray-500">+91-9149318689</motion.p>
    <motion.p className="my-10 text-center text-gray-500" initial = {{x:-100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }}>vaishali.maheshwari4180@gmail.com</motion.p>
    </div>
  )
}

export default getTouch
