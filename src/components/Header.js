import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate=useNavigate();
  return (
    <div className="flex justify-between m-6">
      <div className="text-xl font-bold" >
        <p  className="cursor-pointer" onClick={()=>navigate("/")}>ANIKETH SANTHAN</p>
      </div>
      <div className="flex justify-evenly pl-5 ">
        <p className='pr-5  text-xl cursor-pointer' onClick={()=>navigate("/About")}>About</p>
        <p className='pr-5 text-xl cursor-pointer' onClick={()=>navigate("/Projects")}>Projects</p>
        <p className='pr-5 text-xl cursor-pointer border-r-2' onClick={()=>navigate("/Services")}>Services</p>
        <p className='pr-5  text-xl cursor-pointer pl-2' onClick={()=>navigate("/StartProject")}>Start Project</p>
      </div>
    </div>
  )
}

export default Header
