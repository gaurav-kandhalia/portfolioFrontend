
import { useEffect, useState, useRef } from "react";

const Form = ({  settitle, setlink, Function, msg, button, setCount, setMsg,setFileUpload }) => {
  
  const handleTitle = (e) => settitle(e.target.value);

  const handleLink = (e) => setlink(e.target.value);

  const handleFileUpload = (e) => setFileUpload(e.target.files[0])

  const Back = () => {
    setCount((prev) => {
      return 0;
    })

  }
  const formRef = useRef(null)
  const clearAll = () => {
    // every feild of form should get cleared
    formRef.current.reset();
    setMsg('')

  }
  return (<>
    <form action="" ref={formRef}>
      <div className="mt-8">
        <div className="flex gap-5">
          <div className="w-10 font-bold  text-white hover:text-customPurple">  <label htmlFor="title">Title:</label></div>
          <div>     <input type="text" className="bg-inherit border  border-customPurple outline-none w-80 p-2 focus:shadow-white-glow transition-shadow duration-300" onChange={handleTitle} /></div>
        </div>
        <div className="flex gap-5 mt-4">
          <div className="w-10 font-bold  text-white hover:text-customPurple">  <label htmlFor="title">Link:</label></div>
          <div>     <input type="text" className="bg-inherit border  border-customPurple outline-none w-80 p-2 focus:shadow-white-glow transition-shadow duration-300" onChange={handleLink} /></div>
        </div>
      
        <div className="flex gap-5 mt-4">
          <div className="w-10 font-bold  text-white hover:text-customPurple"> 
             <label htmlFor="title">Img Link:</label>
             </div>
          <div>    
             <input type="file" className="bg-inherit border  border-customPurple outline-none w-80 p-2 focus:shadow-white-glow transition-shadow duration-300" onChange={handleFileUpload} />
             </div>

        </div>

        <div className=" mt-8 flex gap-2 justify-center">
          <div className="rounded-lg w-10 border border-customPurple text-center hover:shadow-white-glow   p-2 font-bold  text-white hover:text-customPurple transition-shadow duration-300" onClick={Back}><i className="fa-solid fa-less-than"></i></div>
          <div className="rounded-lg w-40 border border-customPurple text-center hover:shadow-white-glow   p-2 font-bold  text-white hover:text-customPurple transition-shadow duration-300 cursor-pointer" onClick={Function}>{button}</div>
          <div className="rounded-lg w-10 border border-customPurple text-center hover:shadow-white-glow   p-2 font-bold  text-white hover:text-customPurple transition-shadow duration-300" onClick={clearAll}><i className="fa-solid fa-plus"></i></div>
        </div>
        <div className=" text-[12px] text-center mt-2 font-bold">< span>{msg}</span></div>
      </div>
    </form>
  </>)
}
// customPurple

export default Form;