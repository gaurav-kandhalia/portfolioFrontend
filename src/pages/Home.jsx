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
const bubbleConfigs = [
  { left: '8%', size: '3rem', duration: 11, delay: 0, drift: '20px', scaleFrom: 0.6, scaleTo: 1.05 },
  { left: '22%', size: '2.5rem', duration: 12.5, delay: 1, drift: '-22px', scaleFrom: 0.55, scaleTo: 1.15 },
  { left: '38%', size: '3.5rem', duration: 10.5, delay: 0.4, drift: '28px', scaleFrom: 0.52, scaleTo: 1.08 },
  { left: '58%', size: '2.2rem', duration: 13, delay: 0.9, drift: '-18px', scaleFrom: 0.65, scaleTo: 1.02 },
  { left: '72%', size: '2.8rem', duration: 11.2, delay: 1.3, drift: '24px', scaleFrom: 0.57, scaleTo: 1.1 },
  { left: '88%', size: '2rem', duration: 12.8, delay: 0.7, drift: '-26px', scaleFrom: 0.6, scaleTo: 1.12 },
];
const [visibleBubbles, setVisibleBubbles] = useState(Array(bubbleConfigs.length).fill(false));

useEffect(() => {
  bubbleConfigs.forEach((_, index) => {
    setTimeout(() => {
      setVisibleBubbles(prev => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }, index * 600);
  });
}, []);



 
  return (<>

    <div className='relative bg-center bg-cover pb-20 pt-5  ' style={{ backgroundImage: `url(${svg})` }}>


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

<div className='bubble-wrapper absolute inset-x-0 bottom-0 top-0 pointer-events-none'>
  {visibleBubbles.map((visible, index) => (
    visible && (
      <Bubble
        key={index}
        left={bubbleConfigs[index].left}
        size={bubbleConfigs[index].size}
        duration={bubbleConfigs[index].duration}
        delay={bubbleConfigs[index].delay}
        drift={bubbleConfigs[index].drift}
        scaleFrom={bubbleConfigs[index].scaleFrom}
        scaleTo={bubbleConfigs[index].scaleTo}
      />
    )
  ))}
</div>
        
    </div>




  </>
  )

};

export default Home

