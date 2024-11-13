import { useNavigate } from "react-router-dom"

const ProjectCards = ({name,image}) => {
  const navigate=useNavigate();
  return (
    
    <div className="w-80 h-72  shadow-2xl rounded-xl  m-6 hover:scale-105 flex-shrink-0 ">
      <img onClick={()=>navigate("/Projects")} src={image} alt={name} className="w-full h-60   rounded-lg "></img>
      <h3 className=" m-1 text-xl text-center">{name}</h3>
    </div>
   
  )
}

export default ProjectCards
