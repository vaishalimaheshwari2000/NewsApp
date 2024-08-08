import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import {motion} from 'framer-motion';
const technology = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 mt-20">
    <motion.h1 initial = {{x:-100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }} className=" text-center text-4xl text-inherit mb-10">Technologies</motion.h1>     
    <motion.div initial = {{x:100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }} className="flex flex-wrap justify-center items-center gap-4 ">
   
   <motion.div 
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
       
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay:0.9,
            duration: 2,
            repeat: Infinity,
             repeatType: "reverse"
          }
        }
      }} className="border-4 rounded-md border-neutral-900 p-4 " > <FaReact className="text-7xl text-cyan-400" /> </motion.div> 
   
   <motion.div 
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
       
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay:0.7,
            duration: 2,
            repeat: Infinity,
             repeatType: "reverse"
          }
        }
      }} className="border-4 rounded-md border-neutral-900 p-4 " > 
    <FaHtml5 className="text-7xl text-blue-900 "/>
    </motion.div>
    <motion.div 
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
       
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay:0.7,
            duration: 2,
            repeat: Infinity,
             repeatType: "reverse"
          }
        }
      }} className="border-4 rounded-md border-neutral-900 p-4 " > 
    <FaCss3Alt className="text-7xl text-orange-800"/>
    </motion.div>
    <motion.div 
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
       
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay:0.2,
            duration: 2,
            repeat: Infinity,
             repeatType: "reverse"
          }
        }
      }} className="border-4 rounded-md border-neutral-900 p-4 " > 
    <TbBrandJavascript className="text-7xl text-yellow-400"/>
    </motion.div>
    <motion.div 
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
       
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay:0.6,
            duration: 2,
            repeat: Infinity,
             repeatType: "reverse"
          }
        }
      }} className="border-4 rounded-md border-neutral-900 p-4 " > 
    <IoLogoPython className="text-7xl text-blue-500"/>
    </motion.div>
    <motion.div 
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
       
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay:0.5,
            duration: 2,
            repeat: Infinity,
             repeatType: "reverse"
          }
        }
      }} className="border-4 rounded-md border-neutral-900 p-4 " > 
    <BiLogoTailwindCss className="text-7xl text-green-500"/>
    </motion.div>
    <motion.div 
      animate={["initial"]}
      whileHover={["grow"]}
      variants={{
        grow: {
          scale: 1.1
        },
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
       
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay:0.3,
            duration: 2,
            repeat: Infinity,
             repeatType: "reverse"
          }
        }
      }} className="border-4 rounded-md border-neutral-900 p-4 " > 
    <TbBrandFramerMotion className="text-7xl text-pink-500"/>
    </motion.div>
    </motion.div> 
    </div>
  )
}

export default technology
