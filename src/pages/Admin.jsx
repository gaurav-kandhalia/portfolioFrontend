import Login from '../pages/login'
import svg from '../assets/background.webp'
import Dashboard  from '../components/Dashboard'
import { useState } from 'react'
const Admin = ()=>{
    const [isAdmin,setIsAdmin] = useState(false)
    const [msg,setMsg] = useState('')   ;
    return (<>
 <section className='' style={{backgroundImage:`url(${svg})`}}>
{
    !isAdmin &&
    <Login setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>    
}
{
    isAdmin &&  
    <Dashboard/>
}

 </section>
    </>)
}

export default Admin;