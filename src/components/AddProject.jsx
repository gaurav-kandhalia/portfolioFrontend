import axios from 'axios'
import { useContext,useState } from 'react';
import { ProjectContext,urlContext } from '../context/context';
import Form from './form'


const AddProject = ({setCount})=>{
    
  const {  setProject } = useContext(ProjectContext);
  const {url} = useContext(urlContext)
  const [title,settitle]= useState('')

  const [link,setlink] = useState('')
  const [img_link,setImg_link] = useState('')
 
  const [msg,setMsg] = useState('')
  const [fileUpload,setFileUpload] = useState(null);
  

  const fetchProjects = async () => {
    try {
      const response = await axios.get(url);
      setProject(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  const AddProject = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("fileUpload", fileUpload); 
  
    try {
      const response = await axios.post(`${url}/add`, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
     } );
 
      setMsg(response.data);
      await fetchProjects()
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }
  console.log("---------msg------",msg)
    return (<>
  
          <div className="border-2">
      <div className="text-center font-bold text-2xl">
        <span className="text-customPurple font-bold text-2xl">&lt;</span>

        <span>Add Project</span>
        <span className="text-customPurple font-bold text-2xl">/&gt;</span>
        </div>
    </div>
    <Form title={title}  link={link} img_link={img_link} settitle={settitle}  setlink={setlink} setImg_link={setImg_link} Function={AddProject} msg={msg} button={"Add"} setCount={setCount} setMsg={setMsg} fileUpload={fileUpload} setFileUpload={setFileUpload}/>
    </>)
}

export default AddProject;