import React from 'react'
import {obj1} from './content';
const projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 mt-15">
            
          <h1 className=" my-20 text-center text-4xl ">Projects</h1> 
          <div>
      
      { obj1.map((object,index)=> (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4 ">
        <img className='my-6' src={object.image} alt="" />
        </div>
       
        <div className="w-full lg:w-2/4 flex flex-wrap ">
        <h2>{object.title}</h2>
           <p className='mb-2 text-sm max-w-xl text-neutral-400 mt-5'>{object.description}</p>
           {object.technologies.map((technology,key)=>(
               <div className='flex flex-wrap text-sm p-1 rounded-sm bg-neutral-900 m-1 text-violet-900'>{technology}</div>
         
         ))}
        </div>
       <div >
        
        
          
       </div>

       </div>
        
      ))}

      </div>
       
       </div>
  )
}

export default projects
