import Card from '../components/cards'



const Projects = ({projects})=>{
 
    const position = {
       0:'bottom-10',
       1:'top-20',
       2:'bottom-20'
   
    }
  

    



    return (<>
    <section className='p-4 flex justify-center  flex-col flex-wrap '>
        <div className='text-white    grid grid-cols-2
        sm:grid-cols-3   gap-10  mt-4 p-2' >{
          
            projects.map((val,index)=>{
        
             return    <>
                
               <div className={` ${position[index%3]} flex  relative p-2 key-${index}`} key={index}>
               <Card title={val.title} desc={val.desc} link={val.link} index={index} img_link={val.img_link}/>
               </div>
                
                </>
            })
            }</div>
        
    </section>
    </>)
}

export default Projects;



