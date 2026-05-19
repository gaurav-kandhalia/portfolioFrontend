import '../css/style.css'

import { useEffect } from 'react';
import { Element } from 'react-scroll';

const Card = ({title,link,index,img_link})=>{

  const url = `${link}`

  const getCategory = () => {
    if (index >= 0 && index <= 2) return 'Personal Project'
    if (index >= 3 && index <= 4) return 'Kreativan Technologies Project'
    if (index >= 5 && index <= 6) return 'Wayne E Solutions Project'
    return 'Project'
  }

  const category = getCategory()

console.log("-------------------link-------------------");
console.log(url);


console.log("-------------------card-------------------");
console.log(img_link);


useEffect(() => {
  window.addEventListener('scroll', handleScroll);


  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const handleScroll = ()=>{
 
}

    return (<>

<Element name="work">
    <a href={url}>
    <div className={`  sm:w-[250px] sm:min-h-[350px] w-[190px] min-h-[300px] hover:border hover:border-white  shadow-purple-glow border border-customPurple  bg-slate-800  hover:shadow-white-glow cards opacity-50 hover:opacity-100 z-50 `} style={{ backgroundImage: `url(${img_link})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover' }} >

      <div className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs text-[#a78bfa] font-semibold">{category}</div>

      <div className=" top-64 right-10  relative text-[#988e9f] font-bold ">

      <div className=''>   <h1 className="font-extrabold text-xl"> {title}</h1></div>

      <div className='mt-6 w-44 border-[#988e9f] rounded-xl '></div>
      <div className='mt-2'><span className='text-[#988e9f]'>{index}.</span></div>
        
    </div>
    </div>
    </a>
    </Element>
    </>)
}

export default Card;

