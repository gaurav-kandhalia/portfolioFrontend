import svg from '../assets/svg/tags.svg'
// import { ReactComponent as TagsIcon } from '../assets/svg/tags.svg';
import In from '../assets/svg/in.svg'
import Text from '../components/Text.jsx'
import Span from '../components/SpanText.jsx'
const Contact = ()=>{
    return (<>
    <div className=" text-white pb-8" >
  
        <div><span className="text-[#988e9f]">Contact/&gt;</span></div>
 

        {/* <div className='mt-8'><span className='font-bold text-2xl text-[f9f9f9]'>Find Me On:</span></div> */}
        <Text divClassname={'mt-8'} classname={'font-bold text-2xl text-[f9f9f9]'} text={'Find Me On:'}/>

<div className='mt-8'>
<div className='flex gap-6'>
<div><i className="fa-brands fa-linkedin-in  text-customPurple"></i></div>
        <div className='text-customPurple font-bold'><a href="https://www.linkedin.com/in/gaurav-kandhalia-38157331b/">LinkedIn</a></div>

</div>
<div className='flex gap-6'>
    <div><i className="fa-brands fa-github text-customPurple"></i></div>
    <div className='text-customPurple font-bold'><a href="https://github.com/gaurav-kandhalia">Github</a></div>
</div>
</div>


<div className='text-[#988e9f] mt-8'><Span val={'made with'}/> <i className="fa-solid fa-code"></i> <Span val={'by Gaurav Kandhalia'}/>  </div>
           </div>
    </>)
}

export default Contact;