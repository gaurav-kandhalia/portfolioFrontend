  
import svg from '../assets/background.webp'

import axios from 'axios'

import { useContext, useState } from 'react'



const Login = () => {
 
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const {url} = useContext()



  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 const handleForm = async (e)=>{
e.preventDefault();
// console.log("email--",email);
// console.log("password--",password)


try{
   await axios.post(`${url}/admin`,{email,password})
  // console.log("data----",response.data)
}catch(error){
  console.error('Error:', error.response ? error.response.data : error.message); 
}
 }

  return (<>
    <section className='min-h-screen' style={{ backgroundImage: `url(${svg})` }}>
      <div className='flex justify-end p-7'>
        <div className='text-white text-xl font-bold'><span className='text-customPurple'>&lt;</span>Add Project<span className='text-customPurple'>/&gt;</span></div>

      </div>
      <div className="relative flex  text-gray-800 antialiased flex-col justify-center overflow-hidden mt-30  py-10" >


        <div className="relative py-3 sm:w-96 mx-auto text-center  ">
          <span className="text-2xl font-light text-white">Login to your account</span>
          <div className="mt-4 shadow-purple-glow  rounded-lg text-left">
            <div className="h-2 bg-customPurple rounded-t-md"></div>
            <div className="px-8 py-6">
              <label className="block font-semibold text-white" > Email</label>
              <input type="text" placeholder="Username or Email" className="w-full h-10 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-customPurple focus:ring-1 rounded-md" onChange={handleEmail}/>
              <label className="block mt-3 font-semibold text-white">Password</label>
              <input type="password" placeholder="Password" className="w-full h-10 px-3 mt-2 hover:outline-none focus:outline-none focus:ring-customPurple focus:ring-1 rounded-md" onChange={handlePassword}/>
              <div className="flex justify-between items-baseline mt-4">
                <button type="submit" className="bg-customPurple text-white py-2 px-6 rounded-md hover:bg-customPurple" onClick={handleForm}>Login</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </>)
}

export default Login