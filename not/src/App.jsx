import Navbar from './Components/navbar'
import Hero from './hero';
import About from './about.jsx';
import Technology from './technology.jsx'
import Experience from './experience.jsx'
import Project from './projects.jsx'
import GetTouch from './getTouch.jsx';
export default function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    
    
    <div className='w-full fixed top-0 -z-[-10] h-full'>
        
    </div>
   
   <div className='container mx-auto px-8'>
   <Navbar/>
   <Hero/>
   <About/>
  <Technology/>
  <Experience/> 
  <Project/> 
  <GetTouch/>
    </div> 
   </div> 

  )
}