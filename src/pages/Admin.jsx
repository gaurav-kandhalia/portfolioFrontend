import Login from '../pages/login'
import svg from '../assets/background.webp'
import Dashboard  from '../components/Dashboard'
const Admin = ()=>{
    return (<>
 <section className='' style={{backgroundImage:`url(${svg})`}}>
{/* <Login/> */}
<Dashboard/>
 </section>
    </>)
}

export default Admin;