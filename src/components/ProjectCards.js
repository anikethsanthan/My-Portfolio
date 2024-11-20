import { useNavigate } from "react-router-dom"

const ProjectCards = ({name,image}) => {
  const navigate=useNavigate();
  return (
    
    <div className="overflow-y-hidden bg-[#181818] w-60 md:w-80  h-60 md:h-72 shadow-black shadow-3xl rounded-xl m-2 md:m-6 hover:scale-105 flex-shrink-0 ">
      <img onClick={()=>navigate("/Projects")} src={image} alt={name} className="w-full h-48 md:h-56 object-cover  rounded-lg "></img>
      <h3 className=" text-white m-1 py-3 text-lg md:text-xl text-center font-albert">{name}</h3>
    </div>
   
  )
}

export default ProjectCards
