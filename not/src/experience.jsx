import React from 'react'
import {content, content_present,obj} from './content';
import {motion} from 'framer-motion';
const experience = () => {
  
  return (
  
         <div className="border-b border-neutral-900 pb-24 mt-15">
            
          <motion.h1 initial = {{x:-100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }}  className=" my-20 text-center text-4xl ">Experience</motion.h1> 
       <div>
      
       { obj.map((object,index)=> (
         <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
         <div className="w-full lg:w-1/4 ">
         <motion.p initial = {{x:-100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }}  className='mb-2 text-sm text-neutral-400'>{object.year}</motion.p>
         </div>
        
         <motion.div initial = {{x:100,opacity:0}}
        animate={{ x: 0, opacity:1 }}
        transition={{ ease: "easeOut", duration: 2 }}  className="w-full lg:w-2/4 flex flex-wrap ">
         <h2>{object.title}</h2>
            <p className='mb-2 text-sm max-w-xl text-neutral-400 mt-5'>{object.description}</p>
            {object.technologies.map((technology,key)=>(
                <div className='flex flex-wrap text-sm p-1 rounded-sm bg-neutral-900 m-2 text-violet-900'>{technology}</div>
           
          ))}
         </motion.div>
        <div >
         
         
           
        </div>

        </div>
         
       ))}

       </div>
         </div>
  
  ) 
} 

export default experience
