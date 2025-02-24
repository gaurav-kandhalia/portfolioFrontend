import {  useState } from 'react';
import CardsDash from './CardsDash'
import Update from './update';
import AddProject from './AddProject';
import '../css/style.css'






 const Dashboard = ()=>{
const [count,setCount] = useState(0);
const [Index,setIndex] = useState(0)




// console.log("count====",count)


    return (<>
          <div className="text-white min-h-screen flex justify-center items-center flex-col gap-14 ">
          <div className="text-center font-bold text-2xl  "><span className="text-customPurple font-bold text-2xl">&lt;</span>My Projects<span className="text-customPurple font-bold text-2xl">/&gt;</span></div>
          
          
       <div className=' p-6 shadow-purple-glow border  border-customPurple max-h-80px overflow-auto overflow-y-scroll custom-scrollbar '>
      
               
       {count === 0 && <CardsDash count={count} setCount={setCount} Index={Index} setIndex={setIndex}/>}
                {count === 1 && <Update count={count} setCount={setCount} Index={Index} />}
               {count===2 && <AddProject count={count} setCount={setCount}/>}
                {/* <CardsDash/> */}
       </div>
            </div> 
    </>)
 }

 export default Dashboard;