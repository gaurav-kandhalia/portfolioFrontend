import Header from '../components/Header'
import svg from '../assets/background.webp'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Projects from '../components/project'
import About from '../components/About'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import { useState,useContext } from 'react'
import axios from 'axios'
import { ProjectContext } from '../context/context'
import { Element } from 'react-scroll'
import '../css/style.css'
import Bubble from '../components/Bubble'

const Home = () => {
const {getProject,setProject} = useContext(ProjectContext);
const [count,setcount] = useState();
const [visibleBubbles, setVisibleBubbles] = useState(Array(3).fill(false));
const randomDelay = Math.floor(Math.random() * 2000) + 500;
useEffect(() => {
  visibleBubbles.forEach((_, index) => {
    setTimeout(() => {
      setVisibleBubbles(prev => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }, index * randomDelay); 
  });
}, []);



 
  return (<>

    <div className=' bg-center bg-cover pb-20 pt-5  ' style={{ backgroundImage: `url(${svg})` }}>


  <div className='w-full sm:w-[90%] md:w-4/5 mx-auto '>

  <Header />
  
      <div className=''>
        <Hero />
      </div>
      <div className=''>
        <Hero2 />
      </div>
      <div className='mt-12  pb-8 '>
     
      <Projects projects={getProject} />
   
      </div>
      <div className='mt-16   bg-[#1a1527] px-4 w-ful relative'>
      
 
      <div className='  relative top-10'><span className="text-[#988e9f] ">About/&gt;</span></div>

    <Element name='skills'>
    <div className='mt-28   w-full sm:ml-0 '><About/></div>
    </Element>

      </div>
      <div className='mt-16    px-4 w-ful relative'>
     
     <Element name="contact">
     <div className='mt-28   ml-14 sm:ml-0'><Contact/></div>
     </Element>

      </div>

 
  </div>

<div className='flex sm:gap-32 gap-20 w-[90%] mx-auto flex-row border-2  text-white'>
{visibleBubbles.map((visible, index) => (
        <div key={index}>
          {visible && <Bubble />}
        </div>
      ))}

</div>
        
    </div>




  </>
  )

};

export default Home

