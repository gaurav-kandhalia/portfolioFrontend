import { useContext, useEffect } from "react";
import { ProjectContext,urlContext } from "../context/context";
import axios from 'axios'
import Text from '../components/Text'


const CardsDash = ({count,setCount,Index,setIndex})=>{
    const {getProject,setProject} = useContext(ProjectContext);
    const {url} = useContext(urlContext)


useEffect(() => {
   console.log("-----------getProjectts___________________")
   axios.get(`${url}/getProjects`)
     .then(response => {
       setProject(response.data);


     })
     .catch(error => {
       console.error('Error fetching data', error);
     });
 }, []);


    const updateData = (index)=>{
        console.log("hello world update function")
   setCount((prev)=>{
    return 1;
   })
        setIndex((prev)=>{
            return index;
        });
        
    }
  

    const AddProject = (index)=>{
       setCount(2)
        setIndex((prev)=>{
            return index;
        })
        
    }

    const DeleteProject = async(index)=>{
       
        setIndex((prev)=>{
            return index;
        })
        try {
            const _id = getProject[index]._id;
            const response = await axios.post(`${url}/delete`, {_id});
            // console.log("data---", response.data)
            setProject((prevProjects) => prevProjects.filter((_, i) => i !== index));
          } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
          }
     
    }



    return (<>
        <div className="">
                {
          getProject.map((val,index)=>{
           
            return (<>
            <div className=" p-4 flex gap-4 text-white " id={`project-${index} key-${index}`} key={index}>
                   <div className="border-2 border-gray-600">
                     <img src={val.img_link} alt="project" className="w-20 h-20"/>
                   </div>

<Text divClassname={'w-10  flex justify-center items-center'} classname={'text-[#988e9f]'} text={`${index}.`}/>


<Text divClassname={'w-60  pl-4'} classname={'underline text-[#988e9f]'} text={val.title}/>
<div className="w-10 hover:bg-customPurple flex justify-center items-center" onClick={() => DeleteProject(index)}>
<p><i className="fa-solid fa-trash " ></i></p>

</div>
<div className="w-10  hover:bg-customPurple flex justify-center items-center"   onClick={() => updateData(index)}>
    <p ><i className="fa-solid fa-pen-to-square"></i></p>
</div>



                </div>
               
          
            </>)
          })
                }
            </div>
            <div className="p-4 border-2   flex justify-center items-center hover:bg-customPurple"  onClick={() => AddProject()}>
    <p className="font-bold">Add Project</p>
</div>
    </>)
}

export default CardsDash