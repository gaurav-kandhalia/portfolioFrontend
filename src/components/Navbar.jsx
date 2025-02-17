import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const ScrollTo = (elementName, offset = 0) => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset,
    });
    
  };



 

    return (

      <nav className='flex text-xs sm:text-[16px]  sm:gap-4 text-white'>
        <div >
          <span className='text-customPurple'>&lt;</span>
         <span>Start</span><span className='text-customPurple'>/&gt;</span>
          </div>
        <div onClick={()=>ScrollTo('skills',300)} className='cursor-pointer'><span className='text-customPurple'>&lt;</span>Skills  <span className='text-customPurple'>/&gt;</span></div>
        <div className=' cursor-pointer' onClick={()=>ScrollTo('work',-300)}><span className='text-customPurple'>&lt;</span>Work <span className='text-customPurple'>/&gt;</span></div>
        <div onClick={()=>ScrollTo('contact',-70)}><span className='text-customPurple cursor-pointer'>&lt;</span>Contact<span className='text-customPurple'>/&gt;</span></div>
      </nav>
    );
  };

  export default Navbar;