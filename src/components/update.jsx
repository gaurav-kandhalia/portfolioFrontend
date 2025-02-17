
import axios from 'axios'
import { useContext,useState } from 'react';
import { ProjectContext, urlContext } from '../context/context';
import Form from './form'

const Update = ({ Index,setCount }) => {

  const { getProject } = useContext(ProjectContext);
  const {url} = useContext(urlContext)
  const [title,settitle]= useState('')
  const [desc,setdesc] = useState('')
  const [link,setlink] = useState('')
  const [img_link,setImg_link] = useState('')

  const [msg,setMsg] = useState('')
  const _id = getProject[Index]._id

  
  // const handleTitle = (e) => settitle(e.target.value);
  // const handleDesc = (e) => setdesc(e.target.value);

  const updateProject = async () => {
    console.log(url)

    try {
      const response = await axios.post(`${url}/update`, {_id,title,desc,img_link,link});
      // console.log("data---", response.data)
      setMsg(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }

  return (<>
    <div className="">
      <div className="text-center font-bold text-2xl"><span className="text-customPurple font-bold text-2xl">&lt;</span>Update Project <span className="text-customPurple font-bold text-2xl">/&gt;</span></div>
    </div>
 <Form title={title} desc={desc} link={link} img_link={img_link} settitle={settitle} setdesc={setdesc} setlink={setlink} setImg_link={setImg_link} Function={updateProject} msg={msg} button={"update"} setCount={setCount}/>
   
  </>)
}

export default Update;